var x= function(){
    console.log("Hello Kedar");
}
x();
//--------------------------------------------------------------------------------
var y=function(value1,value2){
    console.log("This is Parameter function ",value1 , value2)
    return "Hello"
}
var z =y(10,20);
console.log(z);
//--------------------------------------------------------------------------------

var square = function(num1){

    console.log("The square of number is ", num1 * num1);
}
//--------------------------------------------------------------------------------
console.log(typeof  square)
//--------------------------------------------------------------------------------
var areaoftriangle= function(base,height){
console.log("Area of triangle is ", base*height);
return "Triangle"
}
var triangle=areaoftriangle(20,50);