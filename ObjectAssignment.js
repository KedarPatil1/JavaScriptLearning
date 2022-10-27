let teacher={
    tname:"Patil sir",
    tsub:"Math",
    tcollage:"GPA",
    tcity:"Ambad",
    degree:{
        degree1:"diploma",
        degree2:"bachlors",
        degree3:"masters",
    },
    certificate:{
        certificate1:"scrumMaster",
        certificate2:"HackerRank",
    },
    concatfunction:function(){
        var ConcatResult=`Teacher name is ${this.tname} and its certification are ${this.certificate.certificate2}`
        return ConcatResult
        console.log(`${teacher.tname} ,${teacher.certificate.certificate2}`)

      
    }
}

console.log(teacher);
console.log(teacher.degree);
console.log( teacher.concatfunction());
teacher.tcity="Jalna" //Modify
console.log(teacher); 
teacher.tcountry="INDIA" //ADD Does not working
console.log(teacher); 
teacher.certificate.certificate3="Azure Fundamental"//Added new key in nested object
console.log(teacher.certificate); 




