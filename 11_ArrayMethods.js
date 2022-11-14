var arrayofNumbers=[1,2,3,4,5];
console.log(arrayofNumbers);
arrayofNumbers.unshift(0) //this will add the element at begining 
arrayofNumbers.unshift(0,1,2) //this will add the element at begining 
console.log(arrayofNumbers);
arrayofNumbers.shift()
arrayofNumbers.shift() //this will remove the element from array from begining
console.log(arrayofNumbers);

console.log(arrayofNumbers.includes(5));
console.log(arrayofNumbers.includes(8)); //this method shows whether the array contains that element of not
console.log(arrayofNumbers.indexOf(4)); //this method shows the position index of array

for (let index = 0; index < arrayofNumbers.length; index++) {
    const element = arrayofNumbers[index];
    console.log(index)
}
for (const key in arrayofNumbers) {
    
        const element = arrayofNumbers[key];
        
    }
arrayofNumbers.reverse() //this will reverse the array element
console.log(arrayofNumbers);

let sliceelement=arrayofNumbers.slice(3)//slice method dilelya position pasun pudhche element return krel
console.log(sliceelement);
let sliceelement1=arrayofNumbers.slice(3,5)
console.log(sliceelement1); // he between value return krel 
//--------------------------------------------------------------

let arrayof=[1,2,3,4,5]
let arr=arrayof.splice(2);
console.log(`These are the elements are removed by splice`,arr)
console.log(`After splice`,arrayof) //it is used to remove the element after specific position

arrayof.splice(2,0,55) //THis is used to add new element in array please remember the syntex zero means no replace
console.log(arrayof);

arrayof.splice(1,1,65,22)
console.log(arrayof)
//sort need to check (ascending or descending order)
arrayof.sort(a,b)

