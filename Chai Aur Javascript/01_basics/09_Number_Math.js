const score = 400;
console.log(score); //400

const balance = new Number(210)
console.log(balance);  //[Number: 210]

console.log(balance.toFixed(2));  //210.00
console.log(balance.toFixed(1));  //210.0

console.log(balance.toString());  //210
console.log(balance.toString().length);  //3   property

let hundreds = 10000000
console.log(hundreds.toLocaleString());  // 10,000,000
console.log(hundreds.toLocaleString('en-IN'));  // 1,00,00,000

let value = 123.8966
console.log(value.toPrecision(2));  //2.1e+2

console.log(value.toPrecision(3));  //211

console.log(value.toPrecision(4));  //210.8

console.log(Number.MAX_VALUE);

// let text = "We are the so-called "Vikings" from the north.";

console.log(Math);   //Object [Math] {}

console.log(Math.abs(4));  //4
console.log(Math.abs(-4));  //4  function

console.log(Math.round(4.6));   //5

console.log(Math.ceil(4.2));   //5

console.log(Math.floor(4.6));   //4

console.log(Math.min(6, 5, 8, 3));   //3
console.log(Math.max(6, 5, 8, 3));   //8


console.log(Math.random());   //value between 0 and 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);




// const score = 400 // JS auto detects it as a number
// const balance = new Number(100) // Using Number Function to explicitly define number in JS
// console.log(score) // 400
// console.log(balance) // [Number: 100]

// Note: Number has comparatively less prototype properties (methods) than String

// Methods with examples:
// 1. balance.toString() // This converts a number into string
// 2. balance.toString().length // Once we convert it to String, all properties / methods of Strings are now open to us, such as length
// 3. balance.toFixed(2) // Used to reduce or round of to specific decimal values
//     - Use Cases 
//         a. After calculation of GST
//         b. In Ecommerce website

// 4. const otherNumber = 23.8966
//     otherNumber.toPrecision(3) // Output - 23.9
//     otherNumber = 123.8966
//     otherNumber.toPrecision(3) // Output - 124    
//     otherNumber = 1123.8966
//     otherNumber.toPrecision(3) // Output - 1.12e+3 (exponential value)

// 5. const hundreds = 1000000
//     hundreds.toLocalString() // By default it converts into US standards
//     hundreds.toLocalString('en-IN') // As per Indian Standards
//     (Note: Check other formats in MDN Docs)

// 6. Other methods
//     .MAX_VALUE
//     .MIN_VALUE
//     .MAX_SAFE_INTEGER
//     .MIN_SAFE_INTEGER

// ----- Maths in JS ----
// Maths library comes along with JS

// Methods ----
// 1. Math.abs() // Converts +ve / -ve integer values to positive
// 2. Math.round(4.3) // Output - 4
// 3. Math.round(4.6) // Output - 5
// 4. Math.ceil(4.2) // Output - 5 (gives top value)
// 5. Math.floor(4.9) // Output - 4 (gives bottom value)
// 6. Math.min(4,3,6,8) // Output - 3
// 7. Math.max(4,3,6,8) // Output - 8
// 8. Math.random() // Gives random value between 0 & 1 in decimals

// Math.random() tricks -----
// Math.random()*10
// Math.random()*10 + 1 // This assures that values are atleast 1 & more than 1
// (Math.random()*10) + 1 // To avoid any BODMAS rule miscalculation

// ---- Trick to randomize value between range ----
// const min = 10
// const max = 20
// const randomValue = Math.floor((Math.random() * (max - min + 1)) + min)
