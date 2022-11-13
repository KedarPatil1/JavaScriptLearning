let Person={
    name:"Kedar",
    age:22,
    city:"Jalna",
    address:{
        street:"abc street",
        houseno:89
    }
}
console.log(Person.name,Person.age,Person.city);
console.log(Person)

//let Student={...Person} // we have created the shadow copy 
let Student=JSON.parse(JSON.stringify(Person)) //this method creates the seprate copy even thought we have nested object
Student.city="Ambad";
console.log(Student) //here it created the seprate copy 
Person.age=23;
Student.age=24;
console.log(Person.age);
console.log(Student.age);  //here it created the seprate copy 

Person.address.houseno=90
console.log(Person.address.houseno)
Student.address.houseno=91
console.log(Person.address.houseno) //here in nested loop he won't able to create the seprate copy
console.log(Student.address.houseno)



