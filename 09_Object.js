//Object Creation
const ObjectKedar ={
    name:"Kedar Patil",
    city:"Jalna",
    age:22,
    address:{                           //nested object
        street:"Pachod Road Ambad", 
        state:"MH",

    },
    eat:function(){                      //in a object we can create a function and we have call that function in line no 31
        console.log("I am vegiterion")

    }, 
    walk:function(){                       //need to call this function and we call it on line no 20
        console.log(this.city);
    },
    details:function(){
        let persondetails=`Name is ${this.name}, age is ${this.age}************`//Concat the object
        return persondetails
        console.log(` ${this.name}, ${this.age}`)
    }

}
console.log(Object.keys(ObjectKedar))
console.log(Object.entries(ObjectKedar));
console.log(Object.values(ObjectKedar));
console.log(ObjectKedar.details());
ObjectKedar.details()
ObjectKedar.walk();
// console.table(ObjectKedar); 
//var fname=ObjectKedar.name; //to access specific value
console.log(ObjectKedar.name) //we can access with other way as well as mention in line no 10
console.log(ObjectKedar["age"])
ObjectKedar.pincode=431204; //To add a new key/value in a object
// console.table(ObjectKedar); 
ObjectKedar.profession="student";
// console.table(ObjectKedar); 
ObjectKedar.name="Kedar Satish Patil"; //To update the values 
console.table(ObjectKedar); 
delete ObjectKedar.age //To delete any property
console.table(ObjectKedar); 
console.log(ObjectKedar.address.state); //To access the nested object value
ObjectKedar.address.landmark="Near Hanuman Temple"//To add new value/key in nested object
console.table(ObjectKedar); 
ObjectKedar.eat();



