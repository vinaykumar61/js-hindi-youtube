// 2 types of Datatypes on the basis of  kis tarah se data ko memory m  rakha jata hai aur access kiya jata hai

// 1. Primitive:- (OR Call By Value)
            // String, Number, Boolean, null, undefined, Symbol(kisi bhi value ko unique banane k liye use hota hai),
            // BigInt

// 2. Non Primitive:- (Or Call By Reference)
// Array, Objects, Functions

// Notes:- JavaScript is a dynamically typed language, but TypeScript is a statically typed language. 
// Longer answer: In dynamically typed languages all type checks are performed in a runtime, 
// only when your program is executing

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outSideTemp = null
let userEmail;
    // Or
// let userEmail = undefined;

// Note:- 'const' declarations must be initialized.

const id = Symbol('123')
const anotherId = Symbol('123')

// Ye ek another symbol deta hai aur value different rahegi chahe same value pass ki ho 
// console.log(id === anotherId)


const bigNumber = 3456768976321931239123n

// Array
const heros = ["shaktiman", "naagraj", "doga"]

// Objects

let myObj= {
    "name": "Vinay Kumar",
    "age": 25
}

// Function

const myFunction = function() {
    console.log("Hello World");
}

console.log(typeof bigNumber)  // bigint
console.log(typeof outSideTemp)  // object
console.log(typeof score)  // number
console.log(typeof scoreValue)  // number

console.log(typeof myFunction)  // function but bola Function Object jata hai 

console.log(typeof id) // symbol


// https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values