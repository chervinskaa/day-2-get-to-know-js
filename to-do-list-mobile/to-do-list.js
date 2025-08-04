// Вітання
const greetings = document.querySelector("#greetings");
const now = new Date();
const hour = now.getHours();

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

// Показ днів тижня (30 днів)
const weekdaysList = document.querySelector('.weekdays-list');
const dayLetters = ['Н', 'П', 'В', 'С', 'Ч', 'П', 'С'];

function formatDate(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
}

const today = new Date();
for (let i = 0; i < 30; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    const dayOfWeek = date.getDay();
    const letter = dayLetters[dayOfWeek];

    const li = document.createElement('li');
    li.textContent = letter;
    li.dataset.date = formatDate(date);

    weekdaysList.appendChild(li);
}

// Глобальні змінні
let selectedDay = null;
let tasksByDay = {};

// Обробка кліку на дні тижня
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

        selectedDay = event.target.dataset.date;
        updateTaskListForSelectedDay();
    }
});

// Оновлення списку завдань
function updateTaskListForSelectedDay() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";

    if (!selectedDay || !tasksByDay[selectedDay]) {
        return;
    }

    tasksByDay[selectedDay].forEach(taskText => {
        const li = document.createElement("li");
        li.classList.add("task-item");
        li.textContent = taskText;

        const deleteBtn = document.createElement("button");
        const img = document.createElement("img");
        deleteBtn.classList.add("delete-btn");
        img.classList.add("delete-icon");
        img.src = "sources/icons8-delete-button-40.png";
        img.alt = "Видалити";
        img.width = 30;
        img.height = 30;
        deleteBtn.appendChild(img);

        deleteBtn.addEventListener("click", () => {
            li.classList.add("delete-animation");
            setTimeout(() => {
                li.remove();
                // Видалити завдання зі списку
                const index = tasksByDay[selectedDay].indexOf(taskText);
                if (index !== -1) {
                    tasksByDay[selectedDay].splice(index, 1);
                }
            }, 400);
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

// Модальне вікно: додати завдання
const modal = document.getElementById("modal");
const addBtn = document.getElementById("add-task-btn");
const taskForm = document.getElementById("task-form");

addBtn.addEventListener("click", function () {
    if (!selectedDay) {
        alert("Оберіть день перед тим, як додавати завдання.");
        return;
    }
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

    if (!tasksByDay[selectedDay]) {
        tasksByDay[selectedDay] = [];
    }
    tasksByDay[selectedDay].push(taskText);

    taskInput.value = "";
    modal.classList.remove("show");
    updateTaskListForSelectedDay();
});
