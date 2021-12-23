const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const buttonLogin = document.getElementById("login-button");
const divEmailValidation = document.getElementById("email-validation");
const divPasswordValidation = document.getElementById("password-validation");


const credetials = {
    email: "",
    password: ""
}

inputEmail.addEventListener('input', (event) => {
    const value = event.target.value;

    

    credetials.email = event.target.value;
});

inputPassword.addEventListener('input', (event) => {
    const value = event.target.value;

    credetials.password = value;
});

buttonLogin.addEventListener('click', () => {
    if (credetials.email.length < 5 || !credetials.email.includes('@') || !credetials.email.includes('.')) {
        divEmailValidation.style = "display: block";
        return;
    }
    divEmailValidation.style = "";
    
    if (credetials.password.length <= 3) {
        divPasswordValidation.style = "display: block";
        return;
    }
    divPasswordValidation.style = "";

    window.location.href = "home.html";
})