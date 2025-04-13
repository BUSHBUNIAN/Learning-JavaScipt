// 3. Comparision operators:
// if one of the operand is a string, then comparision operator converts the string into number and perform computation.

// >
let a=10, b=20;
console.log("a>b: ",a>b);

// <
let c=10, d=20;
console.log("c<d: ",c<d);

// <=
let e=10, f=20;
console.log("e<=f: ",e<=f);

// >=
let g=10, h=20;
console.log("g>=h: ",g>=h);

// == : Here only compare values
let i=10, j=10;
console.log("i==j: ",i==j);

// === : Here compare values and datatype of variables
let k=20, l="Dell";
console.log("k===l: ",k===l);

// != : Here only compare values
let m=10, n=10;
console.log("m!=n: ",m!=n);

// !== : Here compare values or compare datatype of variables
let o="Dell", p=10;
console.log("0!==p: ",o!==p);



// What's the result of null == undefined in javascript?
// Ans: True. Type coercion makes equal and that turns out to be true.

let q=null, r;
console.log(typeof(q));
console.log(typeof(r));
console.log(q==r);

// What's the output of NaN === NaN?
// Ans: False. In JavaScript, NaN is not considered to be equal to NaN even after using strict equality operator.

let s= NaN, t=NaN;
console.log(typeof(s));
console.log(typeof(t));
console.log(s==t);

