// 1. Variable can't define same name
// let petName = 'Jo';
// let petName = 'Ki';
// Error 
// Identifier 'petName' has already been declared
let petName = 'Jo';
petName = 'Ki';

// 2. The name must contain only letters, digits, or the symbols $ and _
let $ = 'symbols';
let _ = 'symbols';
let letterA = 'A';
let number1 = 1;
//let my-name; // hyphens '-' aren't allowed in the name

// 3. The first character must not be a digit.
// let 1degit = 0; error
let degit1 = 0;

// 4. Reserved names
// let let = 5; // can't name a variable "let", error!
// let return = 5; // also can't name it "return", error!

// note: no "use strict" in this example
num = 5; // the variable "num" is created if it didn't exist

console.log(num);
