function show(){
    console.log("This show function is created for testing purpose ");
}
show();

function test(){
    console.log("This test function is created for testing purpose ");
}
test();
console.log("--------------------------------------------------------------");
function display(firstName,lastName){
    console.log("After Concation the reult is " , firstName + lastName);
}
display("Kedar", "Patil");
console.log("--------------------------------------------------------------");
function swap_values(name_01,name_02){
    console.log("Before Swapping", name_01,name_02);
    var temp=name_01;
    name_01=name_02;
    name_02=temp;
    console.log("After Swapping", name_01,name_02);

}
swap_values("Virat","Anushka");
swap_values(1000,2000);
console.log("--------------------------------------------------------------");
function add_three_number(num1,num2,num3){
    console.log("Addition of Given number is:", num1 + num2 + num3);
    console.log("Substraction of Given number is:", num1 - num2 - num3);
    console.log("Multiplication of Given number is:", num1 * num2 * num3);
    console.log("Division of Given number is:", num1 / num2 / num3);

}
add_three_number(10.23,600,40);
console.log("--------------------------------------------------------------");
function concat(value1,value2,value3){
    console.log("Result after string concation is",value1 + value2 + value3);
    return "End of HomeWork"
}
var x =concat("Hello","Good","Morning");
console.log(x);


