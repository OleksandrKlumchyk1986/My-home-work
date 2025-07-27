"use strict";

Math.round((0.1 + 0.2) * 10) / 10; //==================================

var a = 1;
var b = 2;
console.log('a' + 'b');
Number("1") + 2; //================================

var flGb = prompt("Ввусти об'єм флешки у Гб ");
var flMb = flGb * 1024;
var flsizeMb = 820;
var flsum = Math.round(flMb / flsizeMb);
alert("На флешку поміститься " + flsum + " файли розміром 820 Мб."); //===============================

money = 100;
priceChok = 50;
var numberChok = Math.floor(money / priceChok);
var purse = (money % priceChok).toFixed(2);
alert(numberChok);
alert(purse); //=============================

a = 123 % 10;
b = Math.floor(123 % 100 / 10);
c = Math.floor(123 / 100);
var rev = a * 100 + b * 10 + c;
alert(rev); //===============================

var money = 1000;
var interestYear = 5;
var month = 2;
count = money * (interestYear / 100) * (month / 12);
alert(count);