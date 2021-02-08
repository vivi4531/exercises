"use strict";

//Use substring, toLowerCase, toUpperCase, concatenation

const randomname = "peter";

//Turn randomname into lowercase
const lowercasename = randomname.toLowerCase(); 
//Make lowercase t into uppercase T
const oneuppercase = lowercasename.substring(2,3).toUpperCase();
//Concatenate substrings into console
//= peTer
console.log(`${randomname.substring(0,2)}${oneuppercase}${randomname.substring(3,5)}`);

// pETer
const twouppercase = lowercasename.substring(1,3).toUpperCase();
console.log(`${randomname.substring(0,1)}${twouppercase}${randomname.substring(3,5)}`);

// PEter
const firsttwouppercase = lowercasename.substring(0,2).toUpperCase();
console.log(`${firsttwouppercase}${randomname.substring(2,5)}`);

// peteR
const lastletteruppercase = lowercasename.substring(4).toUpperCase();
console.log(`${randomname.substring(0,4)}${lastletteruppercase}`);

// PEtER
const uppercasename = randomname.toUpperCase(); 
const onenewuppercase = uppercasename.substring(2,3).toLowerCase();
console.log(`${uppercasename.substring(0,2)}${onenewuppercase}${uppercasename.substring(3,5)}`);
