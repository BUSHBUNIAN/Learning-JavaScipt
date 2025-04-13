// Variable is declared by JavaScript automatically 

//  Difference b/w let & var keywords: let is  block scope. var is global scope.

x=10;
console.log(x);

//  Variable is declared using 'var' keyword. This was used from 1995-2015 in JavaScript.
var x=15;
console.log(x);

//  let & const keywords were introduced in ES6 in 2015 in JavaScript.

//  Difference b/w let & const keywords: With let keyword, value can be reassigned to the same let variable. With const keyword, Value can't be reassigned to the same const variable.

//  Variable is declared using 'let' keyword. Value can be reassigned to the same let variable. The last value will over-ride and gets printed as output.
let a=55;
a= 33;
console.log("a= "+a);

//  Variable is declared using 'const' keyword. Value can't be reassigned to the same const variable. This will throw an error.
const b=55;
b= 33;
console.log("b= "+b);

// When a variable is declared without an explicit value assignment, its initial value is undefined.
let z;
console.log(typeof(z));

// CamelCase is often used for naming variables in javascript to enhance readability.
let userName="bush_bunian";
console.log("userName: "+userName);
console.log("dataType of userName: "+typeof(userName));



//----------------------------------------------------  Notes   -----------------------------------------------------------------------------

// If you don't want to change value, use const keyword. Use const for declaring objects and arrays.
// If you want to change value, use let keyword
// Avoid using var, as it's used only in older browser.