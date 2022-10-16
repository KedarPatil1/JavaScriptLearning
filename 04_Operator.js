//Assignment operator
console.log(10 + 20);
console.log(50 + 90);

var a = 200;
var b = 500;
var result = a + b;
// var result=a-b;
console.log(`The result is ${result}`);
console.log(`------------------------------------------------------`)
var operator = function (num1, num2) {
    console.log(`Addition of number is`, num1 + num2);
    console.log(`Substraction of number is`, num1 - num2);
    console.log(`Multiplication of number is`, num1 * num2);
    console.log(`Division of number is`, num1 / num2);

}
operator(5, 6);
console.log(`------------------------------------------------------`)
var c = 4;
var d = 8;
if (c % d == 0) {
    console.log("Given number is even")
}
else {
    console.log("Given number is odd")
}
// console.log(`------------------------------------------------------`)
var e = 5;
var f = e++;
console.log(`After post increment   the result is ${f}`) //need to check
console.log(`------------------------------------------------------`)
var h = 5;
var i = ++h;
console.log(`After pre increment result is ${i}`);
console.log(`------------------------------------------------------`)
//COMPOUND OPERATOR
var j = 8;
var k = 9;
j += k;
console.log(`The result of compound addition is ${j}`)//Need to check
console.log(`------------------------------------------------------`)
//COMPARISON OPERATOR
var l = 50;
var m = 100;
console.log("50 is greater than 100 ", l > m);
console.log("50 is less than 100 ", l < m);
console.log("50 is greater than or equal to 100 ", l >= m);
console.log("50 is less than or equal to 100 ", l <= m);
console.log("50 is not equal to  100 ", l != m);
console.log("50 is greater than 100 ", l > m);
console.log("50 is equal than 100 ", l == m);

var n=10;
var o="10";
console.log("Here we used equal to operator group ==",n==o);
var n=10;
var o="10";
console.log("Here we used strict equal to operator group ==",n===o);


