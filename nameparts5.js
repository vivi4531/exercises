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

/* const fullname = "Peter Heronimous Lind"; 
const firstSpace = fullname.indexOf(" ");
const lastSpace = fullname.lastIndexOf(" ");

const firstname = fullname.substring(0,firstSpace); 
const middlename = fullname.substring(firstSpace, lastSpace); 
const lastname = fullname.substring(lastSpace); 

console.log(`First name is ${firstname}. Middle name is ${middlename}. Last name is ${lastname}.`); */







//1602 getNameParts( fullName )

function getNameParts(fullName){

fullName = "ALbuS PeCIvAl WULfriC BriAN DuBleDorE"; 

//Split name in to smaller parts (first, middle and lastname)
const firstSpace = str.indexOf(" ");
const lastSpace = str.lastIndexOf(" ");

const firstname = str.substring(0,firstSpace); 
const middlename = str.substring(firstSpace, lastSpace); 
const lastname = str.substring(lastSpace); 

const result = `${firstname}${middlename}${lastname}`; 

console.log(fullName); 
return result;

capitalize();

}

// const cap = capitalize("ALbuS PeCIvAl WULfriC BriAN DuBleDorE"); 
// console.log(cap); 

// function capitalize(str){
    
// const first = str.substring(0,1).toUpperCase();
// const rest = str.substring(1).toLowerCase();

// const result = `${first}${rest}`; 

// //returns an object with all three parts
// return {firstname, middlename, lastname};
// }

//Løsning

function fullName(lastName, firstName, middleName){
    
    const firstSpace = str.indexOf(" ");
    const lastSpace = str.lastIndexOf(" ");
    
    const firstname = str.substring(0,firstSpace); 
    const middlename = str.substring(firstSpace, lastSpace); 
    const lastname = str.substring(lastSpace); 
    
    const result = `${firstName}${middleName}${lastName}`; 
    
    return result;
}

function getNameParts(fullName){ if (middleName == null){
    console.log(`${firstName} ${lastName}`);
    }
    else {
        console.log(`${firstName} ${middleName} ${lastName}`);
    }
}

function capitalized(str){
    
    const first = str.substring(0,1).toUpperCase();
    const rest = str.substring(1).toLowerCase();
    
    const result = `${first}${rest}`; 
    
    return result;
}

const name ="harry james potter"; 
const parts = getNameParts(name); 
console.log(parts); 
const combined = fullName(part.lastName, parts.firstName, parts.middleName); 
console.log(combined); 




