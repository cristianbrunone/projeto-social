document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let errorMessage = document.getElementById('errorMessage');

    if (email === "admin@email.com" && password === "123456") {
        alert("Login bem-sucedido!");
        window.location.href = "index.html";
    } else {
        errorMessage.style.display = "block";
    }
});