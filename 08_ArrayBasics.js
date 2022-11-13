const arrayOfElement=[1,2,3,4,5,6,7,5,4];
console.log(arrayOfElement);
arrayOfElement.push(3)
arrayOfElement.pop()
console.log("------------------------------------------------------------")
var lengthOfArray=arrayOfElement.length;
console.log(`Length of array is ${lengthOfArray}`);
console.log( arrayOfElement[5]);//To access array element
arrayOfElement[7]=9; //Updated the value of array
console.log(arrayOfElement);
console.log(typeof arrayOfElement)

//let otherarray=arrayOfElement; //shadow copy
let otherarray=[...arrayOfElement] //jar eth spread nahi use kel t o\p la same element copy hoto jyala apn shadow bolto video of 22oct time 2.00
console.log(otherarray);
otherarray[7]=8
console.log(arrayOfElement);
console.log(otherarray);
console.log("------------------------------------------------------------")

const array1=[1,2,3,4]; //We have merge the array
const array2=[5,6,7,8];
//const array3=array1.concat(array2);
//console.log(array3);
console.log("-----other method to concat-----------");
const array3=[...array1, ...array2];
console.log(array3);



