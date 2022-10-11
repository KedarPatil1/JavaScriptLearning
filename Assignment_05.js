function stringAssignment1() {
    var a = "Apple"
    console.log("Assignment 01")
    console.log(`My dream company is ${a}`);
}
stringAssignment1();
//-------------------------------------------
function stringAssignment2() {
    var b = "Contineous learning"
    var c = "Trading"
    var d = "Investing"
    console.log(`My favoriate hobbies are as 1. ${b} 2. ${c} 3.${d}`);
    console.log(`After concating the string result is`, b.concat(c, d))
}
stringAssignment2();
console.log(`---------------------------------------------------------------------`);
//----------------------------------------------
console.log(`Assignment 2`);

var stringHandsOn = function () {
    var stringData = "   Hey you are doing good, keep it up    ";
    console.log(`01`, stringData);
    console.log(`02 Length of string is`, stringData.length);
    console.log(`03 After removing the extra spaces result is`, stringData.trim());
    var trimresult = stringData.trim();
    console.log(`04 By removing the extra spaces now the length is `, trimresult.length);
    console.log(`05 Charater present at given first and last positoin are `, trimresult.charAt(0), trimresult.charAt(trimresult.length - 1));
    console.log(`06 Total number of extra spaces after 3rd result is`,trimresult.split(' ').length-1);
    // console.log(`05 Charater present at given positon are `, trimresult.charAt( trimresult.length-1));
    console.log(`07 Index of Good is `, trimresult.indexOf("good"));
    console.log(`08 Substring from position 22 is `, trimresult.substring(22), `By using slice method`, trimresult.slice(22));
    console.log(`09 String ends with word UP is`, trimresult.endsWith("up"));
    console.log(`10 String starts with word HEY is `, trimresult.startsWith("Hey"));


}
stringHandsOn();

