"use strict";

//Function expressions
//Slide 10

function greeting(firstName){
    return `Hello ${firstName}`;
}

const sayHi = greeting; 

sayHi("Harry"); 
greeting("Harry"); 

//Callback functions
//Slide 23

function hire(person){
    person.hired = true; 
}

function fire(person){
    person.hired = false; 
}

function fireOrHire(action, person){
    action(person); 
}

fireOrHire(hire, person4); 
fireOrHire(fire, person3); 

const person3 = {
    firstName: "Harry", 
    lastName: "Potter", 
    hired: false
}

const person4 = {
    firstName :"Fred", 
    lastName:"Weasly", 
    hired: false
}

console.log(person3,person4); 






//Anonymous functions

//Array functions
