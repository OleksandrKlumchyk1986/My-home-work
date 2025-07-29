Math.round((0.1 + 0.2) * 10) / 10
//==================================
let a = 1;
let b = 2;
console.log('a' + 'b');

Number("1") + 2;
//================================
let flGb = prompt("Ввусти об'єм флешки у Гб ");
let flMb = flGb * 1024;
let flsizeMb = 820;
let flsum = Math.round(flMb / flsizeMb);
alert("На флешку поміститься " + flsum + " файли розміром 820 Мб.");
//===============================
 money = 100;
 priceChok = 50;
let numberChok = Math.floor(money/priceChok)
let purse = (money % priceChok).toFixed(2)
alert(numberChok)
alert(purse)
//=============================
a = 123 % 10;
b = Math.floor((123 % 100) / 10);
c = Math.floor(123 / 100);
let rev = a * 100 + b * 10 + c;
alert(rev)
//===============================
let money = 1000;
let interestYear = 5;
let month = 2;
count= (money * (interestYear / 100) * (month / 12));
alert(count)