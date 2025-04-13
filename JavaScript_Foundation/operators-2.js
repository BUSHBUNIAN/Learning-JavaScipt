// 2. Assignment operators:

// +=
let x=6, y=2;
x+=y;   // x+=y means x=x+y
console.log("sum:",x);


// -=
let a=6, b=2;
a-=b;   // a-=b means a=a-b
console.log("diff:",a);

// *=
let c=6, d=2;
c*=d;   // c*=d means c=c*d
console.log("mul:",c);

// /=
let e=6, f=2;
e/=f;   // e/=f means e=e/f
console.log("div:",e);

// %=
let g=6, h=2;
g%=h;   // g%=h means g=g%h
console.log("mod:",g);

// **=
let i=6, j=2;
i**=j;  // i**=j means i=i**j
console.log("exp:",i);



// Concatenation:

// Strings
let firstName="Bushbunian ", lastName="Mandal";
console.log("Name:",firstName+=lastName);

// String and number
// The + operator performs string concatenation if one of the operand is a string.
const age=26, string="My age is ";
statement=string+age;
console.log(statement);

