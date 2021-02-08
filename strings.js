"use strict";

/* //Strings 5.3 
const longline = "A very, very, very, very, VERY! long line of text,\n that spans across the width of the editor!";

//Template literals 
const name = "Peter";
const drink = "Pepsi"; 

const text = `Hello ${name}, would you like a ${drink}?`;

console.log(text);

//String lenght 
const len = name.length; 

console.log(`${name} is ${len} characters long`);

//String index
const letter = name[0]; 
console.log(`The first letter of ${name} is ${letter}`); */

//Dumbledore exercise 
const name = "Albus Percival Wulfric Brian Dumbledore";

//Question 1 - what is the total number of characters, including spaces? 
const total = name.length; 
console.log(`Total number of characters including spaces is: ${total}`);
//Answer = 39

//Question 2 - what is the character at index 2? 
const letter = name[6];
console.log(`The character at index 2 is: ${letter}.`);
//Answer = b

//Question 3 - which character is at index 6?
console.log(`The character at index 6 is: ${letter}.`);
//Answer = P

 
//Question 4 - What is the index of the first D in Dumbledore? 

//Question 5 - what is the index of the last e in Dumbledore?

//Strings methods
//.trim() removes spaces before and after a string
const str1 = " There is       space here \n  "; 
const str2 = str1.trim();

console.log(str2); 

//Strings method parameters

const fullname = "Albus Percival Wulfric Brian Dumbledore"; 
const firstname = fullname.substring(0,20);
const lastname = fullname.substring(11);

console.log(`firstname is: _${firstname}_`);
console.log(`lastname is: _${lastname}_`);

//Exercise with .substring
//Question 1 - "Albus"
//const firstname = fullname.substring(0,5);
console.log(`Firstname is: _${firstname}_`);

//Question 2 - "Dumbledore"
//const lastname = fullname.substring(29);
console.log(`Lastname is: _${lastname}_`);

//Question 3 "Wulfric"
//const lastname = fullname.substring(15);
console.log(`Middlename is: _${firstname}_`);

//Question 4 - " Wulfric"

//Question 5 - "ian" 
//const firstname = fullname.substring(2,5);
console.log(`_${firstname}_`);

//Question 6 - "bus" 
//const firstname = fullname.substring(2,5);
console.log(`_${firstname}__${lastname}_`);
