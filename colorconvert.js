"use strict";

// //hexToRGB function
// function hexToRGB(string, hexToNumbers){

// //Split hexcode into 3 parts 
// const r = string.substring(0,3); 
// const g = string.substring(3,5);
// const b = string.substring(5,7);

// console.log(`${r} ${g} ${b}`);

// //Convert 3 hexcode parts into numbers

// let R = parseInt(string.slice(0,2), 16); 


// }

// hexToRGB("#c0ffee");


//NY 

function hexToRGB(string){

    //Split hexcode into 3 parts and convert into numbers
    // const r = parseInt(string.substring(0,2), 16); 
    // const g = parseInt(string.substring(1,4), 16); 
    // const b = parseInt(string.substring(4,6), 16); 

    const r = parseInt(string.substring(1,3),16); 
    const g = parseInt(string.substring(3,5),16); 
    const b = parseInt(string.substring(5,7),16); 
    
    console.log(`${r} ${g} ${b}`);
    
    }
    
    hexToRGB("#c0ffee"); //correct
    hexToRGB("#bada55"); //correct
    hexToRGB("#facade"); //correct
    hexToRGB("#f00b42"); //correct
    hexToRGB("#c0de25"); //correct 
