// Primitive 

//string - 2B per char (64 bit arch)
let name = "Bhoomika"; // collection of characters "a", "y"
let name1 = 'Bhoomika';
let name2 = `Bhoomi`; // 2B * 6 chars = 12 Bytes

console.log("type of name is", typeof name);

console.table([name, name1, name2]);


// number - 8B (64 bit arch)
// Integers, Floats, Doubles --> number

let num = 55; // 8 bytes
console.log("type of num is", typeof num);

console.table([num]);

// boolean - 4B (64 bit arch)

let isEnglish = false; // 
let isHindi = true; // 

console.log("type of isHindi is", typeof isHindi);

console.table([isEnglish, isHindi]);

// undefined vs null vs defined 

//student;  // ReferenceError: student is not defined

let student; // varible declared but no value 
console.log(student); // undefined

console.log("type of student is", typeof student);

let student1 = null;
console.log(student1); // null

console.log("type of student1 is", typeof student1);


// BigInt

// 64 bit - 45678933456789876534567898765 - number 


let myNum = 35454324354623456;
console.log("type of myNum is", typeof myNum); // number
let myBigNum = 35454324354623456n;
console.log(myBigNum);
console.log("type of myBigNum is", typeof myBigNum); // bigint

// no operatios allowed between number and bigInt

let myBigNum2 = BigInt("456789098765678");
console.log(myBigNum2);

// Symbol - unique, immutable 

let mySymbol = Symbol();

console.log("type of mySymbol is", typeof mySymbol); // symbol
console.table([mySymbol]);

//let mySymbol4 = new Symbol("good");
//console.log(mySymbol4); // TypeError: Symbol is not a constructor

let mySymbol1 = Symbol('foo');
let mySymbol2 = Symbol('foo');

console.log(mySymbol1 == mySymbol2);


// Non Primitive 

// Object

let studentObj = {
    name: "Kapil",
    age: 30
}

console.log(studentObj); // { name: 'Kapil', age: 30 }

console.log(typeof studentObj);


let fruitsArr = ["apple", "orange", "mango"];

console.log(fruitsArr); // [ 'apple', 'orange', 'mango' ]

console.log(typeof fruitsArr);


// Static vs Dynamic Type Checking

// Java

// String name5 = "Tech Monk";

// JavaScript
let name6 = "Tech Monk";


// Strong vs Weak Typed
console.log("123" - 2);