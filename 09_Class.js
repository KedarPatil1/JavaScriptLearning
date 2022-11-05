class Person{
    constructor(fullname,age,city,gender)
    {
        this.fullname=fullname;
        this.age=age;
        this.city=city;
        this.gender=gender;
    }

}
let instance=new Person("Kedar",22,"Jalna","Male");
let instance1=new Person("Sachin",25,"Beed","Male")
console.log(instance);
console.log(instance1);
console.log(instance instanceof Person);     //he sangt ki create kelela instace tya class cha ahe ka nahi
console.log(instance.age)
instance.age=25
console.log(instance)//Update the object
