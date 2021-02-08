"use strict";

//Only the first letter is upper case, and the rest is lower case.

const randomname = "peter";
const first = randomname.substring(0,1).toUpperCase();
const rest = randomname.substring(1).toLowerCase();

console.log(`${first}${rest}`);






