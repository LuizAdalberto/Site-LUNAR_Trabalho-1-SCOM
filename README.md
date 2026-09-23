# 🚀 LUNAR - Site Institucional & Portfólio de Projetos

> **Trabalho Individual I - Sistemas de Comunicação (SCOM 2026)**  
> Desenvolvido por [Luiz Adalberto]


---

## 📌 Sobre o Projeto

Este repositório contém o código-fonte e a documentação do site institucional do projeto/laboratório **LUNAR**. A plataforma foi desenvolvida para divulgar pesquisas científicas e tecnológicas (como sistemas embarcados ESC e exoesqueletos), apresentar a equipe de pesquisadores e disponibilizar canais de apoio e doações via QR Code Pix.

O projeto foi construído priorizando **HTML5 semântico**, **estilização CSS3 modular**, separação de responsabilidades (pastas dedicadas para estilos e scripts), **responsividade fluida** e aderência às diretrizes internacionais de acessibilidade web (**WCAG 2.2 Nível AA**).

---

## ✨ Principais Funcionalidades e Destaques

- **Estrutura Semântica e Limpa:** Uso rigoroso de tags semânticas (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) e hierarquia única de cabeçalhos (`<h1>`).
- **Design Totalmente Responsivo:** Layout adaptável para dispositivos móveis (≤ 480px), tablets (481px - 1024px) e desktops (> 1024px).
- **Acessibilidade Web (WCAG 2.2 AA):**
  - Contraste de cores validado para legibilidade.
  - Navegação por teclado com estados de foco visíveis (`:focus-visible`).
  - Textos alternativos (`alt`) detalhados em imagens e elementos visuais.
  - Suporte a leitores de tela e link de navegação rápida (*Skip Link*).
- **Componentes Interativos (JavaScript Isolado):**
  - Carrossel dinâmico de exibição de projetos e pesquisas.
  - Modal interativo para formulários e doações via QR Code Pix.
- **Performance e Otimização:**
  - Pré-carregamento de ativos críticos (`<link rel="preload">`).
  - Imagens em formatos otimizados com dimensões explícitas para evitar reordenação de layout (*CLS*).

---

## 📁 Estrutura do Repositório

```text
Site-LUNAR_Trabalho-1-SCOM/
├── Imagens/             # Diretório de imagens e recursos visuais do projeto
├── css/                 # Diretório contendo as folhas de estilo CSS3
├── js/                  # Diretório contendo os scripts JavaScript (Carrossel, Modais, etc.)
├── Index.html           # Estrutura e marcação principal do site em HTML5
└── README.md            # Documentação do repositório no GitHub
