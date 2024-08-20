// Assignment operators

let a = 5;

// Comparison operators

let b = 5;
let c = "5";
console.log(typeof b, typeof c);

console.log(b == c); // checks value not data type

// Strict Equality Check - checks value + data type
console.log(b === c);


// Arithmetic operators - +, -, *, /, %
let d = 15 % 2;
console.log(d);


// Unary operators - single operand
let num1 = 8;
console.log(num1);
let numPostFix = num1--;
console.log(num1, numPostFix);

let numPreFix = ++num1;
console.log(num1, numPreFix);


// Logical operators - &&, ||, !

let num2 = true && false;
console.log(num2);

let num3 = true || false;
console.log(num3);

console.log(!true);

// Bitwise operators - only bits binary numbers 

// 1 - 0001 and 5 - 0101

let andOp = 1 & 5; // 0001 & 0101 = 0001 = 1
console.log(andOp);

let orOp = 1 | 5; // 0001 | 0101 = 0101 = 5
console.log(orOp);

let xorOp = 1 ^ 5; // 0001 ^ 0101 = 0101 = 4
console.log(xorOp);

// >> << !

// String operators - concatenate 

let str = "tech" + "monk";
console.log(str);


// Conditional (ternary) operator
// Comma operator


// Type conversion - Explicit 
// string into number
console.log(parseInt("123"));
console.log(Number("123")); // better way
console.log(typeof parseInt("123"));

// number into string
console.log((123).toString());
console.log(typeof (123).toString());

// boolean into number
console.log(parseInt(true)); // NaN
console.log(Number(false)); // 0
console.log(Number(true)); // 1

// boolean into string
console.log(true.toString()); // true
console.log(typeof true.toString()); // "true"


// Auto Type Conversion - Implicit

console.log(55 + 4 + "tech"); // 59tech 
//JS will treat + as concatination whenever it sees string as an operand

console.log(55 + "tech" + 4); // 55tech4

console.log("123" + 4); // "123"+"4" = 1234

console.log("123" - 4); // 123-2 = 119 

console.log("5" * 4); // 5 * 4 = 20

console.log("5" * "4"); // 5 * 4 = 20
