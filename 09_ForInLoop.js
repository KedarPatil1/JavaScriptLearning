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


    