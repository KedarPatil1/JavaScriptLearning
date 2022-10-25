// var vowel = "India is the best"
// var lengthofstring = vowel.length
// console.log(lengthofstring);
// for (let index = 0; index < lengthofstring; index++) {
//     var charAt = vowel.charAt(index);
//     console.log(charAt)
// }

// var vowel = "India is the best"
// var lengthofstring = vowel.length
// console.log(lengthofstring);
// for (let index = 0; index < lengthofstring; index++) {
//     if (index % 2 == 0) {
//         var charAt = vowel.charAt(index);
//         console.log(charAt)
//     }
// }//this will print the even position character

//How to print vowel from string4
var vowel = "India is the best";
var lowercase = vowel.toLowerCase();
for (let index = 0; index < lowercase.length; index++) {
    var vowel1 = lowercase.charAt(index);
    if (vowel1 == "a" || vowel1 == "e" || vowel1 == "i" || vowel1 == "o" || vowel1 == "u") {
        console.log(vowel1)
    }

}

