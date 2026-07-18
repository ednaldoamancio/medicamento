const CACHE_NAME = 'cuidados-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './1784344039065.png'
];

// Instalação: abre o cache e armazena os arquivos essenciais
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Cache aberto');
        return cache.addAll(urlsToCache);
      })
      .catch((err) => {
        console.error('[SW] Falha ao adicionar ao cache:', err);
      })
  );
  // Ativa imediatamente sem esperar outras abas
  self.skipWaiting();
});

// Ativação: limpa caches antigos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => {
            console.log('[SW] Removendo cache antigo:', name);
            return caches.delete(name);
          })
      );
    })
  );
  // Assume o controle das páginas imediatamente
  self.clients.claim();
});

// Fetch: responde do cache ou busca na rede
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit: retorna do cache
        if (response) {
          return response;
        }
        // Cache miss: busca na rede
        return fetch(event.request)
          .then((networkResponse) => {
            // Se for uma requisição válida, armazena no cache para próxima vez
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
              return networkResponse;
            }
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
            return networkResponse;
          })
          .catch(() => {
            // Se falhar a rede e for uma página, retorna o index.html (fallback)
            if (event.request.mode === 'navigate') {
              return caches.match('./index.html');
            }
          });
      })
  );
});
