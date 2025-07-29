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
}