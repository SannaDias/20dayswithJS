function toggleNewsLetter() {
    var newsletter = document.getElementById("newsLetter");
    newsletter.classList.toggle("active"); // Alternar a classe .active
    newsletter.classList.remove("hidden");
}

function closeNewsletter() {
    var newsletter = document.getElementById("newsLetter");
    newsletter.classList.toggle("active"); // Alternar a classe .active
    newsletter.classList.remove("hidden");
}

var emailInput = document.getElementById("emailInput");
var signupButton = document.getElementById("signupButton");

emailInput.addEventListener("input", function() {
    var email = emailInput.value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Padrão de verificação de email

    if (emailPattern.test(email)) { // Verifica se o email segue o padrão
        console.log("####Entrou no if")
        signupButton.disabled = false; // Habilita o botão "Sign up"
    } else {
        signupButton.disabled = true; // Desabilita o botão "Sign up"
    }
});