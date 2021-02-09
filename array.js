"use strict";

//5.4
// const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
// console.log(letters[4]);

// const newarr = letters;
// newarr[4] = '*';
// console.log(letters[4]);

// console.log(letters);
// console.log(newarr);

// //5.5
// const people = ["Harry", "Ron", "Hermione", "Luna"]; 
// let result; 

// result = people.splice(result,1); 

// console.log(result); 
// console.log(people); 

//Array-like
//const letters = Array.from("abcdefghijklmn");
//console.log(letters);

const str = "abcdefghijklmn"; 
const arr1 = str.split(); 
const arr2 = Array.from(str); 
console.log(str); 
console.log(arr1);
console.log(arr2); 