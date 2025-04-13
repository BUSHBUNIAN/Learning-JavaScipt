// 4. Logical operators:

// &&: Logical AND operator
// If both the conditions appear to be true, then only the output will be true.
// If 1st condition appears to be false, then the output will be false. There's no point to verify the 2nd condition.
let x=54, y=32;
console.log(x>10 && y<100);


// ||: Logical OR operator
// If both the conditions appear to be false, then only the output will be false.
// If 1st condition appears to be true, then the output will be true. There's no point to verify the 2nd condition.
let a=54, b=302;
console.log(a>100 || b<100);

// !: Logical NOT operator
// It negates the statement.
let c=54, d=32;
console.log(!(c!=d));



// 5. Type Operator:

// typeof()
// The typeof() operator incorrectly returns 'object' for null
let s=null, m=26, n="Bush";
console.log(typeof(s));
console.log(typeof(m));
console.log(typeof(n));

// 6. Ternary operator:

// condition ? Statement-1(True) : Statement-2(False)
let age=14;
age>18 ? console.log(age,": Adult") : console.log(age,": Not Adult");



