// Test 2 =============//
/*let result = [1, 2, 3, 4].length;
alert(result);

//==Test 3=====///

/*function about(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
}
alert(about(5, 10));*/

//===Test 4===//

function factorial(n) {
    let rezult = 1
    for (let i = 2; i <= n; i++) {
        rezult *= i
    }
    return rezult;
}
alert(factorial(5))

//====Test 5======//

function sum(a, b, c) {
    return Number(String(a) + String(b) + String(c));
}
alert(sum(1, 4, 9));

//======Test 6=====//

function getS(a, b) {
    return a * (a || b);
}
alert(getS(4, 5));