//====Test 1=====//
function addDrivers(name) {
    drivelist.push(name);
}
let drivelist = [];
addDrivers("Олександр");
addDrivers("Віктор");
console.log(drivelist);
//======================//

//======Test 2=========//
const drivers = ["Олександр", "Віктор", "Олег", "Максим", "Ірина"];
function checkDrivers(name) {
    if (drivers.includes(name)) {
        console.log("Водій є у списку");
    } else {
        console.log("Водія немає у списку")ж
    }
}
checkDrivers("Євген");
checkDrivers("Олександр");
//========================//

//=========Test 3=======//
function distanceFuel(distance, speed, fuelConsumtion) {
    let time = distance / speed;
    let breaks = Math.floor(time / 4);
    let allTime = time + breaks;
    let fuelNeeded = (distance / 100) * fuelConsumtion;
    console.log(`Час з перервами: ${allTime.toFixed(1)} год`);
    console.log(`Потрібно пального: ${allTime.toFixed(1)} л`);
}
distanceFuel(400, 100, 8)
//==============================//

//============Test 4============//
let hours = 20;
let minuts = 59;
let second = 45;
function time() {
    const h = String(hours).padStart(2, 0);
    const m = String(minuts).padStart(2, 0);
    const s = String(second).padStart(2, 0);
}
function addSeconds(sec) {
    let total = hours * 3600 + minuts + second + sec;
    hours = Math.floor((total % 3600) / 60);
    second = total % 60;
}
function addMinuts(min) {
    addSeconds(min * 60);
}
function addHuors(h) {
    addSeconds(h * 3600);
}
addSeconds(35);
addHuors();
console.log(time())