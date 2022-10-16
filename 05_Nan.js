var a=(0/0);
console.log(a)
console.log(typeof a)

var a="Kedar";
var Result=a;

var b="22"
console.log("Before type conversion",typeof b);
var c=+b;
console.log("After type conversion",typeof c)

console.log("Before type conversion",typeof a);
console.log(a,typeof a)
var d=+a;
console.log(d,typeof d)

console.log("After type conversion",typeof d);

var x= "100"
var y="200"
console.log(x+y); //100200

var x= +"100"
var y=+"200"
console.log(x+y); //300

var a=100;
console.log(typeof a)
var b=a.toString();
console.log(typeof b);


