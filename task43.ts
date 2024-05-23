/**
 * Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array
 *  of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate
 *  array. Call show_magicians() with each array
 *  to show that you have one array of the original names and one array with the Great added to each magician’s name.
 * 
 */

let magicianList=['Shakeel', 'Ahmed', 'Shahid'];
let greatMagicianList:string[]=[""];
function make_great(magicianList:string[]):string[]{
    
    for(let i=0;i<magicianList.length;i++){
        greatMagicianList[i]="Great "+magicianList[i];
    }
return greatMagicianList;
}

function showMagicians(magicianList:string[],greatMagicianList:string[]){

    for(let i=0;i<magicianList.length;i++){
        console.log("Actual Name:  "+magicianList[i]);
        console.log("Great Name:  "+greatMagicianList[i]);
    }
    
}

showMagicians(magicianList,greatMagicianList=make_great(magicianList))