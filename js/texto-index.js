const translations = {
  "pt-BR": {
    navbarHome: "Início",
    navbarDocs: "Documentação",
    navbarRights: "Direitos",
    navbarResources: "Recursos",
    navbarLogin: "Login",
    heroTitle: "Imigração no Brasil",
    heroSubtitle: "Informações essenciais para imigrantes e refugiados.",
    heroButton: "Saiba Mais",
    infoTitle: "Informações para Imigrantes",
    infoText:
      "Nosso objetivo é fornecer orientações claras sobre como acessar documentos essenciais, validar a documentação escolar e conhecer os direitos dos refugiados...",
    whyTitle: "Por que se Informar?",
    whyText:
      "Estar bem informado sobre os seus direitos e os procedimentos para regularização é fundamental para a integração no país...",
    footerText: "© 2025 Imigração Ativa. Todos os direitos reservados.",
  },
  es: {
    navbarHome: "Inicio",
    navbarDocs: "Documentación",
    navbarRights: "Derechos",
    navbarResources: "Recursos",
    navbarLogin: "Iniciar Sesión",
    heroTitle: "Inmigración en Brasil",
    heroSubtitle: "Información esencial para inmigrantes y refugiados.",
    heroButton: "Saber Más",
    infoTitle: "Información para Inmigrantes",
    infoText:
      "Nuestro objetivo es proporcionar orientación clara sobre cómo acceder a documentos esenciales, validar la documentación escolar y conocer los derechos de los refugiados...",
    whyTitle: "¿Por qué Informarse?",
    whyText:
      "Estar bien informado sobre sus derechos y los procedimientos para la regularización es fundamental para la integración en el país...",
    footerText: "© 2025 Inmigración Activa. Todos los derechos reservados.",
  },
};

function changeLanguage(lang) {
  const elements = {
    navbarHome: document.querySelector(".nav-link[href='index.html']"),
    navbarDocs: document.querySelector(".nav-link[href='documentacao.html']"),
    navbarRights: document.querySelector(".nav-link[href='direitos.html']"),
    navbarResources: document.querySelector(".nav-link[href='suporte.html']"),
    navbarLogin: document.querySelector(".nav-link[href='login.html']"),
    heroTitle: document.querySelector(".hero-title-translate"),
    heroSubtitle: document.querySelector(".hero-subtitle-translate"),
    heroButton: document.querySelector(".btn-sabermais"),
    infoTitle: document.querySelector(".card-title-translate"),
    infoText: document.querySelector(".card-text-translate"),
    whyTitle: document.querySelector(".bg-light h2"),
    whyText: document.querySelector(".bg-light p"),
    footerText: document.querySelector("footer p"),
    depoimento: document.querySelector("depoimentos-translate"),

    /*documentação.html*/
  };

  for (const key in elements) {
    if (elements[key]) {
      elements[key].innerHTML = translations[lang][key] || "";
    }
  }

  document.documentElement.lang = lang;
  document.getElementById("toggle-language").textContent =
    lang === "es" ? "PT" : "ES";
}

// Define o idioma padrão como português ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  changeLanguage("pt-BR");

  // Adicionar evento de clique ao botão para alternar idioma
  document.getElementById("toggle-language").addEventListener("click", () => {
    const currentLang = document.documentElement.lang;
    const newLang = currentLang === "pt-BR" ? "es" : "pt-BR";
    changeLanguage(newLang);
  });
});
