/**
 * Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() 
 * that modifies the array of magicians by adding the phrase 
 * the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
 * 
 * 
 * 
 */

let magician:string[] = ['Shakeel', 'Ahmed', 'Shahid'];
let modifiedMagician:string[] = [];

function modifiedItemList(magicianList:string[]){

    for(let i=0;i<magicianList.length;i++){
        modifiedMagician[i] = 'The Great '+magicianList[i];
    }
    return modifiedMagician;
}
function show_magicians(magician:string[],modifiedMagician:string[]){
    
    for(let i=0;i<magician.length;i++){
        console.log(modifiedMagician[i]);
        console.log(magician[i]);
    }
}

modifiedItemList(magician);
show_magicians(magician,modifiedMagician)
