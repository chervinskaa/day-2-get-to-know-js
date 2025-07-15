// let name = "Віка";
// let age = 20;
// let isStudent = true;

// console.log("Мене звати " + name);
// console.log("Мені " + age + " років");
// console.log("Я студентка? " + isStudent);

// console

// let fullName = "Viktoria";
// let age = 20;
// let city = "Poltava";
// let hobby = "listen to true crime podcasts";
// let isStudent = true;

// console.log("Мене звати " + fullName);
// console.log("Мені " + age + " років");
// console.log("Я з міста " + city);
// console.log("Моє хобі: " + hobby);
// console.log("Я студентка? " + isStudent);


// console.log(`Мене звати ${fullName}`);
// console.log(`Мені ${age} років`);
// console.log(`Я з міста ${city}`);
// console.log(`Моє хобі: ${hobby}`);
// console.log(`Я студентка? ${isStudent}`);


// IF/ELSE

// let age = 1;
// let withParents = true;

// if (age >= 18) {
//     console.log("Вхід дозволено");
// } else if (withParents) {
//     console.log("Вхід дозволено з батьками");
// } else {
//     console.log("Вибач, доступ заборонено");
// }


// let isRegularCustomer = true;
// let totalAmount = 1009;
// if (totalAmount > 1000) {
//     console.log("Отримуєш знижку 10%!");
// } else if (500 <= totalAmount <= 1000 && isRegularCustomer == true) {
//     console.log("Отримуєш знижку 5%!");
// } else {
//     console.log("На жаль, знижка не надається");
// }


// let password = "";
// if (password.length > 6) {
//     console.log("Пароль прийнято");
// } else if (password.length === 0) {
//     console.log("Ви не ввели пароль");
// } else {
//     console.log("Пароль занадто короткий");
// }

// function greet(name) {
//     console.log(`Hello, ${name}`);
// }

// function multiply(a, b) {
//     return a * b;
// }

// greet("Vika")
// console.log(multiply(3, 7));

// function isEven(number) {
//     if (number % 2 === 0) {
//         return "парне";
//     } else {
//         return "непарне";
//     }
// }

// function calculateArea(width, height) {
//     return width * height
// }

// let area = calculateArea(4, 7);
// console.log(`Площа прямокутника: ${area}`);

// function convertToUpperCase(str) {
//     return str.toUpperCase();
// }
// console.log(convertToUpperCase("JavaScript is fun!"));

// function checkPasswordStrength(password) {
//     if (password.length > 10) {
//         console.log("Сильний пароль");
//     } else if (password.length > 6 && password.length <= 10) {
//         console.log("Середній пароль");
//     } else {
//         console.log("Слабкий пароль");
//     }
// }

// checkPasswordStrength("123456bg222g")

// function greetUser(name, age) {
//     console.log(`Привіт, ${name}! Тобі ${age} років.`);
// }

// greetUser("Vika", 20)


// ЦИКЛИ

// for (let i = 0; i < 5; i++) {
//     console.log("Привіт! Номер " + i);
// }

// let i = 0;
// while (i < 3) {
//     console.log("Це while: " + i);
//     i++;
// }

// let fruits = ["яблуко", "банан", "груша"];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// for (let i = 1; i < 11; i++) {
//     console.log("Привіт! Номер " + i);
// }

// for (let i = 0; i < 21; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// let songs = ["Рустем", "Знаешь,Таня", "Твое имя", "Заново", "Селфхарм"];

// for (let i = 0; i < songs.length; i++) {
//     console.log(songs[i]);
// }

// for (let i = 0; i < 5; i++) {
//     console.log("Я вивчаю JavaScript");
// }

// let i = 1;
// while (i < 11) {
//     console.log(i);
//     i++;
// }

// let i = 2;
// while (i < 21) {
//     console.log(i);
//     i += 2;
// }


// МАСИВИ

// let animals = ["dog", "cat", "mouse", "cow", "shark"]
// for (let i = 0; i < animals.length; i++) {
//     console.log(animals[i]);
// }
// animals.push("monkey");
// console.log(animals);
// console.log(animals.length);
// console.log(animals[animals.length - 1]);


// ОБ'ЄКТИ

// let car = {
//     brand: "audi",
//     model: "A8",
//     year: 2021
// };

// console.log(`${car.brand} ${car.model}`);
// car.year = car.year + 1;
// console.log(car.year);
// car.color = "pink";
// delete car.model;
// console.log(car)

// МЕТОДИ МАСИВІВ

// let numbers = [2, 5, 8, 11, 15];
// let doubled = numbers.map(function (num) {
//     return num * 2;
// });
// console.log(doubled);

// let names = ["Vika", "Anna", "Petro", "Oksana"];

// let longNames = names.filter(function (name) {
//     return name.length > 4;
// });

// console.log(longNames);

// let items = ["🍎", "🍌", "🍇"];
// items.forEach(function (item, index) {
//     console.log(`${index}: ${item}`);
// });