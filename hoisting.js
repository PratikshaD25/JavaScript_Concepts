/* ---------------Hoisting-------------------
    Hoisting is the process where interpreter appears to move the declaration of functions,variables or
    classes to the top of their scope.

    - function hoisting
        -allows to use functions before declaring

    - variable hoisting
        - var are hoisted to the top of their scope and initialized with a value of undefined(special type).
        - let and const are hoisted to the top of their scope but are not initialized with any value,
          exception will be thrown if variable declared with let or const used before initialization.

*/

// Function hoisting

add(10,20)

function add(a,b) {
    return a + b;
}

//variable hoisting

// using var

console.log(a) // undefined
var a;
a=20
console.log(a) // 20


// using let or const

console.log(a) //Throws ReferenceError exception, as the variable value is uninitialized
let a = 40;

