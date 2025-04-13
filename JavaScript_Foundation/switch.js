// Conditional statements in JavaScript
// 4. switch statement: executes a block of code depending on different cases
// If none of the case conditions match and there is no default case, the switch statement will exit without executing any code
let dayNumber=8, day, msg;
switch (dayNumber) {
    case 1:
        day="Sunday";
        break;
    case 2:
        day="Monday";
        break;
    case 3:
        day="Tuesday";
        break;
    case 4:
        day="Wednesday";
        break;
    case 5:
        day="Thursday";
        break;
    case 6:
        day="Friday";
        break;
    case 7:
        day="Saturday";
        break;    
    default:
        msg="Please enter correct day number"
        break;
}

if(msg){
    console.log(msg);
}
else{
    console.log("Day of the week: ", day);
}