console.log(`-------------------------------Using OR Operator-----------------------------`)

var tcsEligibilityCheck = function (grad_score, dip_score, ssc_score, candidate_name) {

    var result = grad_score >= 80 || dip_score >= 60 || ssc_score >= 70 ? `Dear ${candidate_name} you are Eiligible for interview` : `Dear ${candidate_name} you are NOT Eiligible for interview`;
    console.log(result)
}
tcsEligibilityCheck(50, 50, 90, "Kedar Patil");
// tcsEligibilityCheck(80, 40, 80, "Kedar Patil")
console.log(`-------------------------------Using AND Operator-----------------------------`)
var tcsEligibilityCheck = function (grad_score, dip_score, ssc_score, candidate_name) {

    var result = grad_score >= 80 && dip_score >= 60 && ssc_score >= 70 ? `Dear ${candidate_name} you are Eiligible for interview` : `Dear ${candidate_name} you are NOT Eiligible for interview`;
    console.log(result)
}
// tcsEligibilityCheck(50, 50, 90, "Kedar Patil");
tcsEligibilityCheck(80, 40, 80, "Kedar Patil")
console.log(`-------------------------------Assignment 01-----------------------------`)
var maleMarriageEligibility = function (gender, age, boy_Name) {
    var result = gender == "Male" && age >= 21 ? `Hey ${boy_Name} are Eligible for marriage` : `Hey ${boy_Name} are NOT Eligible for marriage`;
    console.log(result)
}
maleMarriageEligibility("Male", "25", "Bill Gates");
maleMarriageEligibility("Male", "17", "Stew Jobs");
console.log(`-------------------------------Assignment 02-----------------------------`)
var femaleMarriageEligibility = function (gender, age, girl_Name) {
    var result = gender == "FeMale" && age >= 18 ? `Hey ${girl_Name} are Eligible for marriage` : `Hey ${girl_Name} are NOT Eligible for marriage`;
    console.log(result)
}
femaleMarriageEligibility("FeMale", "17", "Jenifer");
femaleMarriageEligibility("FeMale", "27", "Malinda Gates");