// JavaScript File

// Figure out how many years at current job and how many years till they get to the dream job

//Create variable to get person's name

var name = prompt("Type in your name");

//alert the user 

alert("Hello "+name+"! We have some more questions for you!");

var job = prompt(name+", where do you currently work?");

console.log(name+", where do you currently work?");

var years=prompt("How many years have you been working at "+job+"?");

console.log("How many years have you been working at "+job+"?");

//Variable for current year
var currentYear = 2014;

//Variable tenure
var tenure = currentYear - Number(years);

//Alert the user of year started at job

alert(name+" you have been at "+job+" since "+tenure+", that is awesome!");


console.log(name+" you have been at "+job+" since "+tenure+", that is awesome!");




//Let's try another.

var futureCompany = prompt("What company do you see yourself working for after you get your degree?");

var futureYear = prompt("what year do you think it will be when you start career your at "+futureCompany+"?");

console.log("what year do you think it will be when you start your career at "+futureCompany+"?");

var yearGoal = Number(futureYear) - Number(currentYear)

alert("You will be working at "+futureCompany+" "+yearGoal+" years from this current year.");

//Bringing it all together

alert(name+" I see a vibrant and exciting future with "+futureCompany+" for you in the next "+yearGoal+" years. Just stick it out with your current job at "+job+" until "+futureYear+".");

console.log(name+" I see a vibrant and exciting future with "+futureCompany+" for you in the next "+yearGoal+" years. Just stick it out with your current job at "+job+" until "+futureYear+".");
