// while 

let num = 1; // initilization 
while(num <= 10){ // condition check
    console.log(num * 2); // execute
    num = num + 1; // increment 
}

//  short hand expression
// num = num + num1; ~ num =+ num1;
// num = num + 1; ~ num++;


// do..while 

let num1 = 1; // initilization 
do {
    console.log(num1 * 2); 
    num1++; // increment 
} while(num1 > 10) // condition check
// change to < here if you want table of 2

// only 2 prints 

// for 

for(let num2 = 1; num2 <= 10; num2++){
    console.log(num2 * 2); // execute
}

// avoid infinite loop

console.log("reverse loop");

for(let num2 = 10; num2 >= 1; num2--){
    console.log(num2 * 2); // execute
}

// nested loop
console.log("nested loop");
for(let i = 1; i <= 5; i++){
    for(let j = 1; j <= 5; j++){
        console.log(j);
    }
}

console.log("star loop");

let str = "";
for(let i = 1; i <= 10; i++){
    for(let j = 1; j <= i; j++){
        str =  str + "*";
    }
    str =  str + "\n";
}
console.log(str);



// Falsy values - null, undefined, "", '', ``, 0, false\

// break stmt
console.log("break in loop");
// outer loop in not effected
// break will come out of the entire same loop only 
for(let i = 1; i <= 5; i++){
    for(let j = 1; j <= 5; j++){
        if(j == 3){
            break;
        }
        console.log(j);
    }
}


// continue stmt
// no effect on outer loop
console.log("continue in loop");
for(let i = 1; i <= 5; i++){
    for(let j = 1; j <= 5; j++){
        if(j % 2 !== 0){ // j is odd = even case should run
            continue; // skip the current iteration only
        }
        console.log(j);
    }
}