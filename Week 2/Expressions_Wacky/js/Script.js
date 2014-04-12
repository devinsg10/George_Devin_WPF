// JavaScript File

// Figure out how many TV show hours you watch in a year 

//Create variable to get person's name

var name = prompt("Type in your name");

//alert the user 

alert("Hello "+name+"! We have some more questions for you!");

var tvShows=prompt("How many television shows do you watch per week?");

console.log("How many television shows do you watch per week?");

//Variable for current year
var weeksinaYear = 52;
var hour = 1;

//Variable hours per year
var hoursperYear = weeksinaYear * Number(tvShows) * Number(hour);

//Alert the user of hours per year

alert(name+" after reviewing the results from my calculations, the conclusion is that you watch approximately "+hoursperYear+" hours of television shows on an anual basis.");


console.log(name+" after reviewing the results from my calculations, the conclusion is that you watch approximately "+hoursperYear+" hours of television shows on an anual basis.")


