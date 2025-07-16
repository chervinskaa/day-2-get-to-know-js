const form = document.getElementById("registerForm");
const resultMessage = document.getElementById("resultMessage");

function validateName(name) {
    const nameError = document.getElementById("nameError");
    if (name.length > 2) {
        nameError.textContent = "";
        return true;
    } else {
        nameError.textContent = "Ім’я повинне містити більше 2 символів";
        return false;
    }
}

function validateEmail(email) {
    const emailError = document.getElementById("emailError");
    if (email.includes("@") && email.includes(".")) {
        emailError.textContent = "";
        return true;
    } else {
        emailError.textContent = "Невірний формат email";
        return false;
    }
}

function validatePassword(password) {
    const passwordError = document.getElementById("passwordError");
    if (password.length >= 6) {
        passwordError.textContent = "";
        return true;
    } else {
        passwordError.textContent = "Пароль має містити щонайменше 6 символів";
        return false;
    }
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const isNameValid = validateName(name);
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (isNameValid && isEmailValid && isPasswordValid) {
        resultMessage.textContent = "Форма успішно відправлена!";
        resultMessage.style.color = "green";
        form.reset();
    } else {
        resultMessage.textContent = "Будь ласка, перевірте введені дані";
        resultMessage.style.color = "red";
    }
});
