document.addEventListener("DOMContentLoaded", function () {
  // Verifica se o formulário de login existe antes de adicionar o evento
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

  // Verifica se o botão de mostrar/ocultar senha existe
  const togglePassword = document.querySelector(".toggle-password");
  if (togglePassword) {
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
  }

  // Verifica se o formulário de dúvidas existe antes de adicionar o evento
  const formDuvidas = document.getElementById("formDúvidas");
  if (formDuvidas) {
    formDuvidas.addEventListener("submit", function (event) {
      event.preventDefault();

      const nome = document.getElementById("nome");
      const celular = document.getElementById("celular");
      const nacionalidade = document.getElementById("nacionalidade");
      const duvida = document.getElementById("duvida");
      const alertaErro = document.getElementById("alertaErro");

      let formIsValid = true;

      if (nome.value.trim() === "") {
        nome.classList.add("is-invalid");
        formIsValid = false;
      } else {
        nome.classList.remove("is-invalid");
      }

      const celularPattern = /^\(\d{2}\)\s\d{5}-\d{4}$/;
      if (!celularPattern.test(celular.value)) {
        celular.classList.add("is-invalid");
        formIsValid = false;
      } else {
        celular.classList.remove("is-invalid");
      }

      if (nacionalidade.value.trim() === "") {
        nacionalidade.classList.add("is-invalid");
        formIsValid = false;
      } else {
        nacionalidade.classList.remove("is-invalid");
      }

      if (duvida.value.trim() === "") {
        duvida.classList.add("is-invalid");
        formIsValid = false;
      } else {
        duvida.classList.remove("is-invalid");
      }

      if (!formIsValid) {
        alertaErro.classList.remove("d-none");
      } else {
        alertaErro.classList.add("d-none");
        alert("Formulário enviado com sucesso!");
        // Limpa os campos após o envio
        nome.value = "";
        celular.value = "";
        nacionalidade.value = "";
        duvida.value = "";
      }
    });
  }
});
