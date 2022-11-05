 function Person(fullname,city,age){
    this.fullname=fullname;
    this.city=city;
    this.age=age
 }
 Person.prototype.country="India";
 let name=new Person("Kedar","Jalna",22);
console.log(name);
let name1=new Person("Kunal","Jalna",22);
console.log(name1);
console.log(Person.fullname);
console.log(name1.country)//Prototype