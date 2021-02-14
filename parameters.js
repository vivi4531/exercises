"use strict";
// sayHello(); 

// //Say hello - slide 9 
// function sayHello(lastName, firstName){
//     console.log(`Hello ${lastName}${firstName}`);
// }

// firstName();

//The function is called on an earlier line than it is created?
//Undefined

//The function is called with a variable called myName?
//Undefined

//There is another variable called firstName outside the function?
//Uncaught reference error - firstName is not defined

//The function is called without any parameter?
//Uncaught reference error - firstName is not defined at sayHello (function) parameters

//The function is called with firstName and lastName?
//Undefined

//And the function is called with lastName before firstName?
//Undefined 


//Multiple parameters - slide 11
function presentPet(firstName, animalType, animalName){
console.log(`My name is ${firstName}, I have a ${animalType} called ${animalName}`);
}

presentPet();

//My name is undefined, I have a undefined called undefined.