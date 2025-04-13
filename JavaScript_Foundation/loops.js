// Loops: To repeat any action multiple times we use loops in JavaScript 
/* Types of Loops:
1. For 
2. For in
3. For of
4. while
5. do while 
*/


// 1. For:  
// Syntax: for(initialization; condition; updation){....}
// Print values from 0 to 10

console.log("Print values from 0 to 10 using 'for loop':");
let i=0
for(i; i<=10; i++){
    console.log(i);
    
}

// 2. For in: It's employed in case of object in JavaScript. It iterates through each keys of the object.
// Syntax: for (<key_name> in <object_name>) {....}

const user={101: "Bush", 102: "Jasmina", 103: "Smita"};
console.log("Iterating through each keys of the object using 'for in loop':");

// For accesing: key:value pair of object
// Syntax: for (<key_name> in <object_name>){ console.log(<object_name>[key_name]); } 

for(key in user){
    console.log(user[key]);    
}


// 3. For of: It's employed in case of array in JavaScript, since array is also an object. It iterates through each values of the array.
// Synatx: for (<array_element_name> of <array_name>){....}


const fruit=["Mango", "Apple", "Guava", "Strawberry"];
console.log("Iterating through each elements of the array using 'for of loop':");

// For accesing: element of array
// Synatx: for (<array_element_name> of <array_name>){ console.log(<array_element_name>); } 

for(element of fruit){
    console.log(element);
}


// 3. While:
// Synatx: while(<condition>){....}

// Print values from 1 to 10

let num=1;
console.log("Print values from 1 to 10 using 'while loop':");
while (num<11) {
    console.log(num);
    num++;
}


// 3. Do While: The code gets executed only once, it makes no odds if the condition appears to be true or false
/* Synatx: do{....}
while(<condition>) */

// Print values from 1 to 10
let num1=10;
console.log("Print values from 10 to 1 using 'do while loop':");
do {
    console.log(num1);
    num1--;
} 
while (num1>=100);  // Output: 10
