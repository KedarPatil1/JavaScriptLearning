console.log(`-----------------ASSIGNMENT 01-------------------`)

var wordLengthSquare = function (word) {
    var wordlength = word.length;
    console.log(`The length of word is  ${wordlength} and its square is `)
    return wordlength * wordlength;
}
console.log(wordLengthSquare("JavaScript"));
console.log(wordLengthSquare("Developer"));
console.log(wordLengthSquare("Google"));

console.log(`-----------------Division of string-----------------`)
var temp = function () {
    var a = "I am angular developer".length
    var result = "I am angular developer".split(" ");
    var fresult = result.length
    var x = console.log(`Final result is `, a / fresult)
}
temp()
console.log(`-----------------Multiply of string-------------------`)
var temp = function () {
    var a = "I am angular developer".length
    var result = "I am angular developer".split(" ");
    var fresult = result.length
    var x = console.log(`Final result is `, a * fresult)
}
temp()
console.log(`-----------------ASSIGNMENT 02-------------------`);

var greaterno = function (num1, num2) {
    var result = num1 > num2 ? num1 : num2
    console.log(`The greater number is ${result}`)
}
greaterno(10, -10);
greaterno(800, 999);
console.log(`----------------`);
var oddoreven = function (value1) {
    var result = value1 % 2 == 0 ? "evern" : "odd";
    console.log(`Given no is ${result}`);
}
oddoreven(29);
oddoreven(44);
oddoreven(0);
oddoreven(101);
oddoreven(59);
console.log(`----------------`);
var word = function (value1) {
    var a = value1.length;
    var result = a % 2 == 0 ? "even" : "odd"
    console.log(`The given no is ${result}`)
}
word("JavaScript");
word("Developer");
word("Google");
