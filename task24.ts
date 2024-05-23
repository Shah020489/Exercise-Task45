/**
 * More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
 * If you want to try more comparisons, write more tests. 
 * Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
 */

console.log("Equality and Inequality with Numbers");
console.log(2==2);
console.log(2!=2);
console.log(3==3);
console.log(3!=3);


console.log("Greater Than and Less Than with Numbers");
let a=3;
let b=2;
console.log(a>b&&a<b);
console.log(a<b&&a>b);
console.log(a>b||a<b);
console.log(a<b||a>b);




console.log("Equality and Inequality with Strings");

let firstString:string="Enterprise64";
let secondString:string="enterprise64";

console.log(firstString==secondString);
console.log(firstString!=secondString);

console.log(firstString.toLowerCase()==secondString.toLowerCase());
console.log(firstString.toLowerCase()!=secondString.toLowerCase())