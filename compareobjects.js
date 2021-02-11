"use strict"; 

//Are these two objects the same? - slide 17
const student1 = {
    firstName: "Harry",
    lastName: "Potter"
};

const student2 = {
    firstName: "Harry",
    lastName: "Potter"
};

//const student2 = student1; 

student1.firstName = student2.firstName; 
student1.lastName = student2.lastName; 

if(student1 == student2){
    console.log("They are the same!");
} else {
    console.log("They are not ...");
}

//How about these two? - slide 18 
//They are not 

//Try modifying one object - slide 20 
// student1.firstName = "Potty"; 
// console.log(student1); 
// console.log(student2); 
//Writes out They are not... And the firstname for student1 has changed to Potty 


//Try making one object, exactly like the other - slide 21
//What happens now when you compare them? 
//they are not the same 

//Can you see any differences in the objects?


