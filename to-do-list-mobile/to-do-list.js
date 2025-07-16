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
    // відкрити завдання на день
});


// Карточки завдань

const container = document.getElementById("tasks-card");

