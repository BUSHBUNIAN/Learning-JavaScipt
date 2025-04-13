function categorizeNumber(num) {
    // Use switch-case to categorize the number
    switch (num){
        case 1: console.log("one");
        break;
        
        case 2: console.log("two");
        break;
        
        case 3: console.log("three");
        break;
        
        case 4: console.log("four");
        break;
        
        default: console.log("Unknown number");
        break;
    }
}

categorizeNumber(1); // Output: One
categorizeNumber(2); // Output: Two
categorizeNumber(3); // Output: Three
categorizeNumber(5); // Output: Unknown number