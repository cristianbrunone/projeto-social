# Imigração Ativa - Suporte para Imigrantes no Brasil

![Captura de Tela Principal](https://github.com/cristianbrunone/projeto-social/blob/main/css/capture_screen.png)

> Plataforma informativa para auxiliar imigrantes na regularização documental, acesso a direitos e integração no Brasil.

## 📁 Sobre o Projeto

O **Imigração Ativa** é um site informativo desenvolvido para oferecer suporte completo a imigrantes e refugiados no Brasil. Contém orientações sobre:

- 📝 Processos de documentação (RNM, CPF, SUS)
- ⚖️ Direitos legais e proteção contra discriminação
- 🏥 Acesso a serviços públicos de saúde e educação
- 💼 Oportunidades de emprego e recursos comunitários
- 🌐 Tradução automática para 6 idiomas
- ♿ Acessibilidade com VLibras

## 🛠 Tecnologias Utilizadas

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)  
[![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white)](https://getbootstrap.com)  
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

**Principais recursos:**
- Bootstrap 5 para layout responsivo
- Google Translate API para multilíngue
- VLibras para acessibilidade
- Animações com animate.css
- Formulário interativo de suporte

## 🌟 Funcionalidades Principais

### Navegação Integrada
```html
<nav class="navbar navbar-expand-lg navbar-dark bg-custom">
  <a class="navbar-brand" href="index.html">Imigração Ativa</a>
  <div class="collapse navbar-collapse">
    <ul class="navbar-nav ms-auto">
      <li class="nav-item"><a class="nav-link" href="documentacao.html">Documentação</a></li>
      <li class="nav-item"><a class="nav-link" href="direitos.html">Direitos</a></li>
    </ul>
  </div>
</nav>
```

### Tradução em Tempo Real
```javascript
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'pt',
    includedLanguages: 'en,es,fr,de,it,pt'
  }, 'google_translate_element');
}
```

### Acessibilidade com VLibras
```html
<div vw class="enabled">
  <div vw-access-button class="active"></div>
  <div vw-plugin-wrapper>
    <div class="vw-plugin-top-wrapper"></div>
  </div>
</div>
<script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script>
```

## 🚀 Como Executar

Clone o repositório:
```bash
git clone https://github.com/seu-usuario/imigracao-ativa.git
```


Acesse no navegador:
```bash
http://localhost:3000
```

## 📂 Estrutura do Projeto
```
imigracao-ativa/
├── assets/               # Imagens e ícones
├── css/
│   └── styles.css        # Estilos personalizados
├── js/
│   ├── scripts.js        # Lógica principal
│   └── texto-index.js    # Conteúdo dinâmico
├── index.html            # Página inicial
├── documentacao.html     # Guia de documentação
├── direitos.html         # Direitos legais
├── suporte.html          # Recursos de apoio
└── README.md
```

## 📝 Scripts do Projeto

Este projeto possui scripts para:
- Validação e autenticação do login
- Aplicação de máscara para telefone
- Toggle de visibilidade da senha
- Validação do formulário de dúvidas
- Comportamento da Navbar ao rolar a página

```javascript
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
      const validEmail = "admin@gmail.com";
      const validPassword = "123123";
      if (email === validEmail && password === validPassword) {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "index.html";
      } else {
        document.getElementById("errorAlert").style.display = "block";
      }
    });
  }
});
```

## 🤝 Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua funcionalidade:
```bash
git checkout -b feature/nova-funcionalidade
```
3. Commit suas mudanças:
```bash
git commit -m 'Adicionei uma nova funcionalidade'
```
4. Push para a branch:
```bash
git push origin feature/nova-funcionalidade
```
5. Abra um Pull Request
