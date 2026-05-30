# 🛸 Rick and Morty | Explorador de Personagens

Projeto de **Web Development Front-End** que consome a [Rick and Morty API](https://rickandmortyapi.com/) para listar e exibir os personagens da série em cards interativos.

---

## 📸 Preview

> Site que exibe os personagens do multiverso de Rick and Morty com nome, status (vivo/morto/desconhecido), espécie e localização atual.

---

## 🚀 Tecnologias Utilizadas

- **HTML5** — Estrutura semântica da página
- **CSS3** — Estilização e layout responsivo com cards
- **JavaScript (Vanilla)** — Manipulação do DOM e consumo da API via `fetch`
- **[Rick and Morty API](https://rickandmortyapi.com/)** — API pública e gratuita com dados dos personagens

---

## 📁 Estrutura de Arquivos

```
rick-and-morty-api/
│
├── index.html                   # Página principal
├── css/
│   └── style.css                # Estilos da aplicação
├── js/
│   └── script.js                # Lógica e consumo da API
└── Teorico_Web_Development.docx # Documento teórico do trabalho
```

---

## ⚙️ Funcionalidades

- 🔍 **Busca automática** dos personagens ao carregar a página
- 🃏 **Cards dinâmicos** gerados via JavaScript com:
  - Foto do personagem
  - Nome
  - Status com indicador colorido (🟢 Vivo / 🔴 Morto / ⚪ Desconhecido)
  - Espécie
  - Localização atual
- ⚠️ **Tratamento de erros** caso a API esteja indisponível

---

## 🌐 Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/Th3L0ck1/Rick-and-morty-API.git
   ```

2. Abra o arquivo `index.html` diretamente no navegador — **não é necessário nenhum servidor ou instalação**!

---

## 📡 API Utilizada

- **Base URL:** `https://rickandmortyapi.com/api/character`
- **Método:** `GET`
- **Documentação oficial:** [rickandmortyapi.com/documentation](https://rickandmortyapi.com/documentation)

---

