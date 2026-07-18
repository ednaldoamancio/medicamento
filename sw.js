const CACHE_NOME = "caderno-cuidados-v2";
const ARQUIVOS = ["./", "./index.html", "./manifest.json", "./1784344039065.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE_NOME).then((c) => c.addAll(ARQUIVOS)));
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((chaves) =>
      Promise.all(chaves.filter((c) => c !== CACHE_NOME).map((c) => caches.delete(c)))
    )
  );
  clients.claim();
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((resposta) => {
      return (
        resposta ||
        fetch(e.request)
          .then((res) => {
            const clone = res.clone();
            caches.open(CACHE_NOME).then((c) => c.put(e.request, clone));
            return res;
          })
          .catch(() => caches.match("./index.html"))
      );
    })
  );
});
