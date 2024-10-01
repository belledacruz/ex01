document.getElementById("contactform").addEventListener("submit", function(event)
{
event.preventDefault();

const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const message = document.getElementById("message").value.trim();
const errorMessage = document.getElementById("errorMessage").value.trim();

errorMessage.textContent = "";

if (name === "" ||  email === "" || message === "") {
    errorMessage.textContent = "Por favor, preencha todos os campos.";
    return;

}

if (!validateemail(email)) {
    errorMessage.textContent = "Por favor, insira um e-mail válido.";
    return;
}
alert("formulario enviado com sucesso")
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
}