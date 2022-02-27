/*     ----------------Diff between var,let and const------------------------------
    We can create/declare variables using keyword - var, let and const
    - let and const introduced in ES6
    - major difference between these variables related to --
        - scope [ means where these variables are available for use.]
                - Function Scope: Visibility is limited to the function.
                - Block Scope: Visibility is limited to the block of code. [ i.e. if, for any block]
            - var declarations are function scoped.
            - let and const declarations are block scoped.

        - Redefining and Re-declaring feature
                - var can be redefined and re-declared anywhere throughout the scope
                - let can be redefined but can not be re-declared within its scope.
                - const cannot be redefined or re-declared within its scope.

        - hoisting
            - var are hoisted to the top of their scope and initialized with a value of undefined(special type).
            - let are hoisted to the top of their scope but are not initialized with any value.
            - const are hoisted to the top of their scope but are not initialized with any value.
*/

// Scope
    //function scope
    function myFn() {
        var x = 10;
        console.log(x); //prints 10
        }
    console.log(x); // ReferenceError: x is not defined

    //block scope
    if (true) {
        let x = 10;
        console.log(x); //prints 10
    }
    console.log(x); // ReferenceError: x is not defined

// "var" redefining and re-declaring

var a =10;
a=10
console.log(a) // print  10

var a=20;
var a=40;
console.log(a) // print  40

// "let" redefining and re-declaring within diff. scope

let a =60;
a =70;
console.log(a)  // print 70

let a = 3;
let a =9;
console.log(a) //SyntaxError: Identifier 'a' has already been declared

let b =20;
if(true) {
    let b= 60;
    console.log(b) // 60
}
console.log(b) // 20

//"const"

const x = 10;
console.log(x); //prints 10
x = 11; // error: Assignment to constant variable.

const y;
y = 2; //error

const z = 12;
console.log(z) //prints 12
const z= 13; // error: Identifier 'y' has already been declared


