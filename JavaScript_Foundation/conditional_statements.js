// Conditional statements in JavaScript
// Sometimes, you've to take actions based on some decisions. In Such scenarios, conditional statements play a vital role.
       

// 1. if statement: executes a block of code if a specified condition is true

// Check if a number is positive or negative
let num1=-4;

if(num1<0){
    console.log(num1, "is positive"); // Output: is positive    
}

let num2=6;

if(num2<0){
    console.log("is negative"); // Output: Nothing will be printed. Explanation: Condition appears to be false       
}



// 2. if...else statement: code inside if(){...} gets executed if a specified condition is true and code inside else{...} gets executed if a specified condition is false 

// Check if a person is adult or minor
const age=15;

if(age>=18){
    console.log("Age:",age, "   You're an Adult");     
}

else{
    console.log("Age:",age, "   You're a minor");        
}


// 3. else if statement: specifies a new condition to test if the first condition is false

let mark=59, grade;

if (mark>90) {
    grade='A';
} 

else if (mark>80 && mark<90) {
    grade='B';
}

else if (mark>70 && mark<80) {
    grade='C';
}

else if (mark>60 && mark<70) {
    grade='D';
}

else {
    grade="FAIL";
}

console.log("You've secured ", mark, "marks.  Your grade is ", grade);
