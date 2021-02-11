"use strict"; 

//Add a property - slide 5
//let person1 = { firstName: "Peter", age: 29, student: false};
const person1 = { firstName: "Peter", age: 29, student: false};

console.log(person1.lastName); 
//Writes out undefined 

person1.lastName = "Lind"; 
console.log(person1.lastName); 
//Writes out Lind

//How can we view the entire object
console.log(person1); 


//Properties can also be removed - first try - slide 6 
person1.lastName = undefined; 

console.log(person1.lastName); 

console.log(person1.middleName); 

//Whats the difference? 
//Nothing - both undefined

//Properties can also be removed - second try - slide 7 
delete person1.lastName; 

console.log(person1.lastName); 
//Writes out undefined

console.log(person1); 
//Writes out firstname, age, student

//Difference between delete and setting
//Delete = deletes property from object
//Setting = sets property to something (e.g. undefined) 


//let vs. const 

//Like arrays, const objects can be modified - slide 9
person1.age++; 
console.log(person1); 

//But the variable itself cannot be reassigned (if const)
const person2 = { firstName: "Vivi", age: 27, student: true};

person1 = person2; 
//Error: person1 is a const, so it can not be reassigned
//You can not change the object itself but you can change the properties

//MUTABILITY 
