console.log(`--------Assignment on OddEvenNumber----------------------`);
var oddOrEven = function (num1) {
    if (num1 % 2 == 0) {
        console.log(`The number entered ${num1} is Even Number`);
    }
    else {
        console.log(`The number entered ${num1} is NOT Even Number`);
    }

}
oddOrEven(45);
oddOrEven(70);
oddOrEven(67);
oddOrEven(98);

console.log(`--------Assignment on Voting----------------------`);
var vote = function (num2) {
    if (num2 >= 18) {
        console.log(`Your age  is ${num2} and you are eligible for voting`);
    }
    else {
        console.log(`Your age  is  ${num2} and you are NOT eligible for voting`);
    }
}
vote(18);
vote(17.5);
vote(28);
vote(82);
console.log(`--------Assignment on String Character Count----------------------`);

var stringCount = function (value) {

    if (value.length > 10) {
        console.log(`Yes The length string is more than excepted length`)
    }
    else {
        console.log(`No The length string is more than excepted length`)
    }

}
stringCount("JavaScript-ES6");

console.log(`--------Assignment on String start with ----------------------`);

var start_with=function(value){

var b=value.startsWith("java")
console.log(b)
}
start_with("JavaScript-ES6")