"use strict";

//====first task===============//
var age = prompt("Введіть сівій вік");
age = parseInt(age);

if (age <= 11) {
  alert("Ви дитина!");
} else if (age <= 17) {
  alert("Ви підліток");
} else if (age <= 59) {
  alert("Ви дорослий");
} else {
  alert("Ви пенсіонер");
} //====second task =========//


function getSymbol() {
  var n = Number(document.getElementById("num").value);
  var symbol = '';

  switch (n) {
    case 0:
      symbol = ")";
      break;

    case 1:
      symbol = '!';
      break;

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
      symbol = 'Incorrect value entered.Enter a value from 0...9';
  }

  var output = document.getElementById("output");
  output.textContent = "Rezult: ".concat(symbol);
} //====third task=====//


var from = Number(prompt("Початок (-10...10):"));
var to = Number(prompt("Кінець (-10...10):"));

if (from < -10 || to > 10 || from > to) {
  alert('Введіть правильне значення від -10 до 10');
} else {
  var sum = 0;
  var i = from;

  while (i <= to) {
    sum += i;
    i++;
  }

  alert("\u0421\u0443\u043C\u0430 \u0432\u0456\u0434 ".concat(from, " \u0434\u043E ").concat(to, "= ").concat(sum));
} //========fourth task====//


function gcd(a, b) {
  while (b != 0) {
    var r = a % b;
    a = b;
    b = r;
  }

  return a;
}

var x = Number(prompt("Введіть перше число:"));
var y = Number(prompt("Введіть друге число:"));

if (isNaN(x) || isNaN(y)) {
  alert("Введіть цілі числа.");
} else {
  alert("НСД = " + gcd(x, y));
} //======fifth task===//


var j = promt("Ввудіть число");
a = Number(a);

if (isNaN(a) || j <= 0) {
  alert('Введіть додатнє число');
} else {
  var rezult = "";

  for (var _i = 1; _i <= j; _i++) {
    if (j % c === 0) {
      rezult += _i + "";
    }
  }

  alert("Дільник числа" + j + ":" + rezult);
}