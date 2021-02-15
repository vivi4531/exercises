"use strict";

//Only the first letter is upper case, and the rest is lower case
//Capitalization function

function capitalize(str){

//const str = "peter";
const first = str.substring(0,1).toUpperCase();
const rest = str.substring(1).toLowerCase();

console.log(`${first}${rest}`);
//console.log(str);
}

capitalize("vivi");





