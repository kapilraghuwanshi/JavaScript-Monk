// {}

// var

// var a;

// a = 10; // can be reassigned

// a = 20;

// var a = 10;

// var a = 20; // can be re-declared

// Let

// let b;

// b = 100;

// let b = 100; // re-declration is not allowed

// let b = 200; // syntax error - Cannot redeclare block-scoped variable 'b'

// let b; // value un-availabe -> undefined -> 100
// console.log(b);
// b = 100;

// Const

// const c; // 'const' declarations must be initialized.

// const c = 200; // Cannot redeclare block-scoped variable 'c'

// block scope/ local
// {
// var a =10;
// let b =20;
// const c = 30;
// }
// console.table(a,b,c); // ReferenceError: b is not defined

// functional scope

// function add() {
//   var d = 10;
//   let b = 20;
//   const c = 30;
// }
// add();
// console.log(d);

// Shadowing

// var a = 10;
// {
//     var a = 100;
//     let b = 200;
//     const c = 300;
//     console.table(a, b, c);
// }
// console.table(a); // a inside had shadowed a outside

// let a = 100;
// {
//     let a = 200;
//     {
//         let a = 300;
//         console.log(a); // 300
//     }
//     console.log(a); // 200
// }
// console.log(a); // 100

// Illegal Shadowing

// var a = 100;
// {
//     let a = 200;
//     console.log(a);
// }

// SyntaxError: Identifier 'a' has already been declared
// let a = 100;
// {
//     var a = 200;
// }

let a = 100;
// 100 lines of code
{
    let a = 200;
}


// home work questions
for (let i=0; i< 5; i++){
console.log(i);
}
console.log(i); // i acessible here ?

for (var i=0; i< 5; i++){
    console.log(i);
    }
    console.log(i); // i acessible here ?