var x = "Hello Kedar";
console.log(x);

var string = x.length;
console.log(string);
//---------------------------------------
//charAt
var position = x.charAt(6); //Function to find the character position
console.log(position);
console.log(x.charAt(8))
//---------------------------------------

//indexof
var index = x.indexOf(("K"))
console.log(index);
//---------------------------------------
//concat
var fname = "Kedar";
var lname = "Patil";
// var result=console.log(fname.concat(lname));
var result = console.log(fname.concat(" ", lname));
//---------------------------------------
//replace
var replace = "Hi kedar how are you";
console.log(replace.replace("are", "is"))
//---------------------------------------
//uppercase
var uppercase = "Sachine is god of cricket";
console.log(uppercase.toUpperCase());
//---------------------------------------
//trim
var trim= " ExTrA sPACES aRE NOT AllowEd hERe  ";
console.log("Before trim length is ",trim.length);
var resulttrim=trim.trim();
console.log("After trim length is ",resulttrim.length);
console.log(trim.includes("sPACES"));
//---------------------------------------
//SUBSTING
console.log("Result of substring is ",trim.substring(2,6));
//---------------------------------------
//SPLIT
var split="Rohit Rahul Virat Surya  Rishab Jaddu";
console.log(split.split("|")); //Returns the element of an array
//---------------------------------------
//String Temlate
var template=`"This is string template with backtick"`;
console.log(template);
//---------------------------------------
//Variable substituation
var firstname="Kedar";
var lastname="Patil";
console.log(`My name is ${firstname} and lastname is ${lastname}`);