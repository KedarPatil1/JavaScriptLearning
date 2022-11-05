class Vehical {
    constructor(model, name, cc, seats, category) {
        this.model = model;
        this.name = name;
        this.cc = cc;
        this.seats = seats;
        this.category = category;
    }
}
let vehicalInfromation = new Vehical("PassionPro", "HeroPassionPro", 110, 2, "TwoWheeler");
console.log(vehicalInfromation);
//---------------------------------------------------
class Collage {
    constructor(collName, category, affUniversity, type, city) {
        this.collName = collName;
        this.category = category;
        this.affUniversity = affUniversity;
        this.type = type;
        this.city = city;
    }
}
let ResultOfCollage = new Collage("SIEM", "Engineering", "SPPU", "Private", "Nashik");
console.log(ResultOfCollage);
//----------------------------------------------------------------------
const ObjectKedar ={
    name:"Kedar Patil",
    city:"Jalna",
    age:22
}
console.log(ObjectKedar)

for (const key in ObjectKedar) {
    if (Object.hasOwnProperty.call(ObjectKedar, key)) {
        const element = ObjectKedar[key];
        console.log(element)
        
    }
}


    //this assignment is incomlete 