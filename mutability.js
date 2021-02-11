"use strict"; 

//MUTABILITY 

//The same object can exist in multiple places - slide 12
let person1 = { 
    firstName: "Peter",
    age: 29, 
    student: false
}; 
let person2 = { 
    firstName: "other Peter",
    age: 28, 
    student: false
}; 

//const person2 = person1; 

//person2.firstName = "other Peter"; 

console.log(person1.firstName); 
//Writes out other Peter 

//Try playing with variables - slide 15 
let person3 = person1; 

//person3.firstName = "Changed"; 
//Firstname on person1 og person3 is now changed

//person3 = person2; 
//Firstname on person2 and person3 is now other Peter

//person2.firstName = "Also changed"; 
//Firsname on person2 now also changed 

person1 = person3; 
//Firstname on person1 and person3 is now Peter. Person2 is other Peter  

console.log("person1"); 
console.log(person1); 

console.log("person2"); 
console.log(person2); 

console.log("person3"); 
console.log(person3); 