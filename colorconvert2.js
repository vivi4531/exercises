"use strict";

/*
//hexToRGB function
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

*/

    //rgbToHex function

    //Object.create(r,g,b); 
    
    // function rgbToHex(r,g,b){
    
    //     const RGB = Object.create();
    //     // const r = numberToString(string.substring(1,3),16); 
    //     // const g = parseInt(string.substring(3,5),16); 
    //     // const b = parseInt(string.substring(5,7),16); 
        
    //     console.log(`${RGB}`);
        
    //     }

    //     rgbToHex("186,218,85"); 

/*
        function rgbToHex(rgb) { 
            let hex = Number(rgb).toString(16);
            if (hex.length < 2) {
                 hex = "0" + hex;
            }
            return hex;}

            console.log(rgbToHex); 
        

rgbToHex("186,218,85"); 


function fullColorHex(rgb){
    let red rgbToHex(r); 
    let green rgbToHex(g); 
    let blue rgbToHex(b); 

    return red+green+blue; 
}; 

fullColorHex(186,218,85); */



//NY 
function componentToHex(c) {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  console.log(rgbToHex(186, 218, 85)); // #bada55
  console.log(rgbToHex(250, 202, 222)); // #facade
  console.log(rgbToHex(192, 255, 238)); // #c0ffee
  console.log(rgbToHex(240, 11, 66)); // #f00b42
  console.log(rgbToHex(192, 222, 37)); // #c0de25
 
  console.log(rgbToHex(12, 2, 17)); // #0c0211
  console.log(rgbToHex(1, 2, 3)); // #010203
  console.log(rgbToHex(9, 0, 37)); // #090025