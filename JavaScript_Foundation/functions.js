// Function: It's a block of code that performs a particular task.
// 'function' keyword is used to declare a function.
// Every function returns a value. 'return' keyword is used for this.
// Function doesn't get executed itself, they need to be called for the execution. 
// When function is called, arguments are passed for the parameters. 


/* Syntax: function <function_name( <parameter1>, <parameter1> )> {
block of code
return <value>;
} */

// Function writing Type-1
// Sum of two numbers

const num1=5, num2=4;

function sum(num1, num2){
    return num1+num2;
}

console.log("Function writing Type-1");

const result=sum(num1, num2);
console.log("sum of ", num1,"and", num2, "is",result);




// Function writing Type-2
// Sum of two numbers

const a=55, b=45;

function sum(a, b){
    return a+b;
}

console.log("Function writing Type-2");
console.log("sum of ", a, "and", b, "is", sum(a, b));




// Function writing Type-3
// Sum of two numbers

function sum(c, d){
    return c+d;
}

console.log("Function writing Type-3");
console.log("sum is", sum(60, 30));




// Function writing Type-4
// Function code can be reused 
// Sum of two numbers

function sum(c, d){
    return c+d;
}

console.log("Function writing Type-4 \nReusing the same block of code of function and producing different results");
console.log("sum is", sum(60, 30));
console.log("sum is", sum(400, 400));
console.log("sum is", sum(41, 58));





// Function writing Type-5
// Sum of two numbers

function Addition(){
    const x=45, y=67;
    const result= x+y;
    console.log("sum is", result);
}
console.log("Function writing Type-5 \nCalling local variables of function");
Addition();




// Understanding 'NaN' in JavaScript
// Sum of two numbers 

const num3=6, num4=8;

function sum(num3, num4){
    return num3+num4;
}

console.log("Understanding 'NaN' in JavaScript:");

console.log("sum:",sum()); // Output: NaN   Explanation: Since no arguments are passed to the 'sum(num3, num4)' function, num3 and num4 inside the function are 'undefined'. In JavaScript, 'undefined + undefined' results 'NaN'