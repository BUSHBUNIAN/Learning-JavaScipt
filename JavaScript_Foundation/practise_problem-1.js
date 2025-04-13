// Return true if a given type of the variable is an integer.

// If the remainder after dividing by 1 is zero, then it’s a whole number (return true). Otherwise, return false.
function checkInt(num){
    return num%1===0;
}
console.log(checkInt(-4));
console.log(checkInt(12.3));

