// JavaScript File

// Figure out what year we graduate and how old we will be when we graduate

//Create variable to get person's name

var name = prompt("Type in your name");

//alert the user 

alert("Hello "+name+"! We have some more questions for you!");

var years=prompt("How many years will it be before you finish college?");

console.log("How many years will it be before you finish college?");

//Variable for current year
var currentYear = 2014;

//Variable graduation date
var graduationDate = currentYear + Number(years);

//Alert the user of graduation date

alert(name+" you will graduate in "+graduationDate+".");

//console.log it out too

console.log(name+" you will graduate in "+graduationDate+".");




//Let's try another.

var age = prompt("How old are you?");


var ageGraduation = Number(age) + Number(years);


//var ageGraduation = Number(age) + Number(years);


console.log("You will be "+ageGraduation+" when you graduate from college.");


alert("You will be "+ageGraduation+" when you graduate from college.");

//Bringing it all together

alert(name+" you will graduate from college in the year "+graduationDate+" at the age of "+ageGraduation+"!");

console.log(name+" you will graduate from college in the year "+graduationDate+" at the age of "+ageGraduation+"!");
