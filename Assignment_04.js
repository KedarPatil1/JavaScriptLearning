var square = function (num1) {
    console.log("The square of number is ", num1 * num1);
    return "Printed the square result"
}
var value = square(5);
var value = square(6);
var value = square(25);
var value = square(100);
console.log(value);
console.log("--------------------------------");

console.log(typeof square);
console.log("--------------------------------");
var areaoftriangle = function (base, height) {
    console.log("Area of triangle is ", 0.5 * (base * height));
    
}
 areaoftriangle(45, 34);
console.log("--------------------------------");
var areaofrectangle= function (base, height) {
    console.log("Area of rectangle is ",  (base * height));
    
}
 areaofrectangle(499, 917);
 console.log("--------------------------------");

 var swap= function(value1,value2){
    console.log("Before swap the value is", value1,value2);
    var temp=value1;
    value1=value2;
    value2=temp;
    console.log("After swap the value is ", value1,value2);
 }
 swap("Virat","Anushkha");
 swap(1000,2000);
 console.log("--------------------------------");
 var test="JavaScript is the most popular language";
 var x=test.length
 console.log("The length of character is",x);
 var y=test.indexOf("S")
 console.log("Index positon of S is",y);
 console.log("--------------------------------");
 var z=test.lastIndexOf("language");
 console.log("The last index is ",z);
 var w=test.charAt(8);
 console.log("Character at 3rd last position is",w);
 //console.log(test.charAt(-3));
