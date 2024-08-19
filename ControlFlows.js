// if else

// if(expression){
//     execute block 1
// } else {
//     execute block 2
// }

let isHoliday = false;

// if(isHoliday){
//     console.log("Hurray, we are not going to office/college!");
// } else {
//     console.log("Saddddd, we have go to office/college!");
// }

let isFlexi = false;

if(isHoliday){
    console.log("Hurray, we are not going to office/college!");
} else if (isFlexi) {
    console.log("Okay, I ll take that as leave!");
} else {
    console.log("Saddddd, we have go to office/college!");
}

// HW - write a program to print all 7 days of your week - day 1 - Monday...

// Switch

let today = "wednesday";
// let today = ""; - sunday

switch (today) {
    case "monday": 
        console.log("Today is monday!");
        break;
    case "tuesday": 
        console.log("Today is tuesday!");
        break;
    case "wednesday": 
        console.log("Today is wednesday!");
        break;
    default:
        console.log("Today is Sunday Funday!");
}

// Ternery Operators

if(3 > 1){
    console.log("yes");
} else {
    console.log("no");
}

// concise way
3 > 1 ? console.log("yes") : console.log("no");

3 > 1 ? (2 > 1 ? console.log("yupp"):console.log("nope")) : console.log("no");