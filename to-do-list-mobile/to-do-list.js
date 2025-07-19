const greetings = document.querySelector("#greetings")
const now = new Date();
const hour = now.getHours();

// Вітання

function greetingsNow(hour) {
    if (hour >= 5 && hour < 12) {
        return "Доброго ранку ☀️";
    } else if (hour >= 12 && hour < 16) {
        return "Доброго дня 🌤️";
    } else if (hour >= 16 && hour < 22) {
        return "Доброго вечора 🌇";
    } else {
        return "Добраніч 🌙";
    }
}

greetings.textContent = greetingsNow(hour);

// Дні тижня

const weekdaysList = document.querySelector('.weekdays-list');
const dayLetters = ['Н', 'П', 'В', 'С', 'Ч', 'П', 'С'];

const today = new Date();

for (let i = 0; i < 30; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    const dayOfWeek = date.getDay();
    const letter = dayLetters[dayOfWeek];

    const li = document.createElement('li');
    li.textContent = letter;
    weekdaysList.appendChild(li);
}

// Обрати день тижня

const allDays = weekdaysList.querySelectorAll('li');

weekdaysList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        allDays.forEach(day => {
            day.style.backgroundColor = "#53424c";
            day.style.color = "white";
        });
        event.target.style.backgroundColor = "hsl(324, 87%, 80%)";
        event.target.style.color = "#53424c";
        event.target.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest"
        });
    }
});


// Відкрити вікно щоб додати завдання
const modal = document.getElementById("modal");
const addBtn = document.getElementById("add-task-btn");
const taskForm = document.getElementById("task-form");
const modalContent = document.getElementById("modal-content");

addBtn.addEventListener("click", function () {
    modal.classList.add("show");
});


window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.classList.remove("show");
    }
});


taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();


    if (taskText === "") return;

    const li = document.createElement("li");
    li.classList.add("task-item");
    li.textContent = taskText;

    const deleteBtn = document.createElement("button");
    const img = document.createElement("img");
    img.src = "sources/icons8-delete-button-40.png";
    img.alt = "Видалити";
    img.width = 30;
    img.height = 30;
    deleteBtn.appendChild(img);

   deleteBtn.addEventListener("click", () => {
    li.classList.add("delete-animation");
    setTimeout(() => {
        li.remove();
    }, 400);
});


    li.appendChild(deleteBtn);

    const taskList = document.getElementById("task-list");
    taskList.appendChild(li);

    taskInput.value = "";
});
