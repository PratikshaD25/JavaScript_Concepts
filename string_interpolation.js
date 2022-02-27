/* ------------------ String Interpolation / Template Literals--------------------
 template string (``) supports placeholders the expression inside this executed during runtime.
  format : ${expression}
    expression can be anything:
        -variables : ${value}
        -operators : ${a + b}
        -functions: ${myFun()}
*/

const a = 2;
const b = 3;
const sum1 = `The sum is ${a + b}`;
console.log(sum1); // => 'The sum is 5';
function sum(num1, num2) {
  return num1 + num2;
}
const sum2 = `The sum is ${sum(a, b)}`;
console.log(sum2); // => 'The sum is 5'