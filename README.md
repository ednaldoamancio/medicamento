# 📋 Caderno de Cuidados

Um aplicativo web simples e responsivo criado para facilitar o registro diário de medicações e sinais vitais. Desenvolvido especialmente para auxiliar no revezamento de cuidados de pacientes em casa.

## ✨ Funcionalidades

- **Registro por Turnos:** Separação clara entre Manhã, Tarde e Noite para evitar confusão com os medicamentos.
- **Sinais Vitais:** Campos dedicados para Pressão Arterial, Pulso e Oximetria em todos os turnos.
- **Identificação de Responsável:** Registro de quem preparou e aplicou a medicação (com autocompletar para familiares).
- **Histórico (Caderno):** Visualização rápida de todos os registros anteriores, organizados do mais recente para o mais antigo.
- **Edição e Exclusão:** Possibilidade de corrigir um registro caso a medição tenha sido esquecida ou excluir lançamentos acidentais.
- **Exportação:** Geração de um arquivo `.csv` (planilha) com todo o histórico para levar ao médico.
- **Armazenamento Local:** Os dados ficam salvos de forma segura no navegador do dispositivo (`localStorage`).

## 🚀 Como usar

1. Acesse a página do aplicativo hospedada no Vercel no navegador do seu celular ou tablet.
2. Adicione a página à "Tela Inicial" do seu dispositivo para que ela funcione como um aplicativo nativo.
3. Escolha o turno (Manhã, Tarde ou Noite) e preencha as informações.
4. Confira o resumo e clique em "Confirmar e Salvar".

## 👨‍💻 Desenvolvedores

Projeto criado e mantido com carinho por **Ednaldo (Naldo)** e **Maria Genilda (Gê)** para facilitar a rotina de cuidados em família.

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3 (Variáveis CSS, Flexbox, Grid, Design Mobile-First)
- JavaScript (Manipulação de DOM e LocalStorage)
