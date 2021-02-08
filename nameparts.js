"use strict"; 

//Old way
/*const fullname = "Peter Heronimous Lind"; 
const firstname = fullname.substring(0,5);
const middlename = fullname.substring(6,16);
const lastname = fullname.substring(17,21); */

//console.log(fullname);
/* console.log(`full name is: _${fullname}_`);
console.log(`first name is: _${firstname}_`);
console.log(`middle name is: _${middlename}_`);
console.log(`last name is: _${lastname}_`);
 
//Using .split()
console.log(`${fullname.split(" ")}`);*/

//New way 
//Using .indexOf() 
const fullname = "Peter Heronimous Lind"; 
const firstSpace = fullname.indexOf(" ");
const lastSpace = fullname.lastIndexOf(" ");

const firstname = fullname.substring(0,firstSpace); 
const middlename = fullname.substring(firstSpace, lastSpace); 
const lastname = fullname.substring(lastSpace); 

console.log(`First name is ${firstname}. Middle name is ${middlename}. Last name is ${lastname}.`);


