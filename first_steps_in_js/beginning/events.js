const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const heading = document.querySelector('h1');

btn1.addEventListener('click', function () {
    console.log("Кнопка натиснута!");
    heading.textContent = "Текст змінено!";
});

btn2.addEventListener('click', function () {
    const newP = document.createElement('p');
    newP.textContent = "Це новий абзац!";
    document.body.appendChild(newP);
});

btn3.addEventListener('click', function () {
    const paragraph = document.querySelector('p');
    if (paragraph) {
        paragraph.remove();
    }
});