//====first task===============//
let age = prompt("Введіть сівій вік")
age = parseInt(age);
if (age <= 11) {
    alert("Ви дитина!");
} else if (age <= 17) {
    alert("Ви підліток");
} else if (age <= 59) {
    alert("Ви дорослий");
} else {
    alert("Ви пенсіонер")
}

//====second task =========//
function getSymbol() {
    const n = Number(document.getElementById("num").value);
    let symbol = ''
    switch (n) {
        case 0:
            symbol = ")";
            break;
        case 1:
            symbol = '!';
            break
        case 2:
            symbol = "@";
            break;
        case 3:
            symbol = "#";
            break;
        case 4:
            symbol = "$";
            break;
        case 5:
            symbol = "%";
            break;
        case 6:
            symbol = "^";
            break;
        case 7:
            symbol = "&";
            break;
        case 8:
            symbol = "*";
            break;
        case 9:
            symbol = "(";
            break;
        default:
            symbol = 'Incorrect value entered.Enter a value from 0...9'
    }

    const output = document.getElementById("output");
    output.textContent = `Rezult: ${symbol}`;
}
//====third task=====//
let from = Number(prompt("Початок (-10...10):"));
let to = Number(prompt("Кінець (-10...10):"));
if (from < -10 || to > 10 || from > to) {
    alert('Введіть правильне значення від -10 до 10')
} else {
    let sum = 0;
    let i = from;
    while (i <= to) {
        sum += i;
        i++;
    }
    alert(`Сума від ${from} до ${to}= ${sum}`);
}
//========fourth task====//
function gcd(a, b) {
    while (b != 0) {
        let r = a % b;
        a = b;
        b = r;
    }
    return a;
}

let x = Number(prompt("Введіть перше число:"));
let y = Number(prompt("Введіть друге число:"));

if (isNaN(x) || isNaN(y)) {
    alert("Введіть цілі числа.");
} else {
    alert ("НСД = " + gcd(x, y))
}
//======fifth task===//
let j = promt("Ввудіть число")
a = Number(a);
if (isNaN(a) || j <= 0) {
    alert('Введіть додатнє число');
} else {
    let rezult = "";
    for (let i = 1; i <= j; i++) {
        if (j % c === 0) {
            rezult += i + "";
        }
    }
    alert("Дільник числа" + j + ":" + rezult);
}

