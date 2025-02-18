document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Impede o envio padrão do formulário

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Credenciais válidas (exemplo)
  const validEmail = "admin@gmail.com";
  const validPassword = "123123";

  if (email === validEmail && password === validPassword) {
    // Login bem-sucedido: armazena o estado de autenticação e redireciona para a página inicial
    localStorage.setItem("loggedIn", "true");
    window.location.href = "index.html";
  } else {
    // Exibe o alerta de erro
    document.getElementById("errorAlert").style.display = "block";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const togglePassword = document.querySelector(".toggle-password");
  const passwordInput = document.getElementById("password");

  togglePassword.addEventListener("click", function () {
    const icon = togglePassword.querySelector("i");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      icon.classList.replace("ri-eye-line", "ri-eye-off-line");
    } else {
      passwordInput.type = "password";
      icon.classList.replace("ri-eye-off-line", "ri-eye-line");
    }
  });
});
