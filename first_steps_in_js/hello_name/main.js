const input1 = document.getElementById('nameInput1');
const input2 = document.getElementById('nameInput2');
const greeting = document.getElementById('greetingText');

input1.addEventListener('input', function () {
    const name = input1.value.trim(); // Видаляємо пробіли з початку/кінця
    if (name) {
        greeting.textContent = `Привіт, ${name}!`;
    } else {
        greeting.textContent = ''; // Якщо поле порожнє
    }
});


input2.addEventListener('input', function () {
    const name = input2.value.trim(); // Видаляємо пробіли з початку/кінця
    if (name.length > 2) {
        message.textContent = "Ім’я прийнято";
        message.style.color = "green";
    } else {
        message.textContent = "Ім’я занадто коротке";
        message.style.color = "red";
    }
});


const emailInput = document.getElementById('emailInput');
const checkBtn = document.getElementById('checkBtn');
const emailMessage = document.getElementById('emailMessage');

checkBtn.addEventListener('click', function () {
    const email = emailInput.value.trim();
    if (email.includes("@") && email.includes('.')) {
        emailMessage.textContent = "Email прийнято!";
        emailMessage.style.color = "green";
    } else {
        emailMessage.textContent = "Неправильний формат email";
        emailMessage.style.color = "red";
    }
});
