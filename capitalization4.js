"use strict";

//Only the first letter is upper case, and the rest is lower case.

const cap = capitalize("VIvi"); 
console.log(cap); 

function capitalize(str){
    
const first = str.substring(0,1).toUpperCase();
const rest = str.substring(1).toLowerCase();

const result = `${first}${rest}`; 

return result;
}





