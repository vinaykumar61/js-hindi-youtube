// Why string to number conversion is confusing

let score = "33"   // "33abc" // null // undefined // true // "Vinay"
let score2 = "33abc"  // Ye number m convert jayega jabki ye pure number nhi hai but result m NaN milega
// console.log(typeof score)
// console.log(score)
// console.log(typeof(score))

let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)


// Input      Output()
// "33" => 33
// "33abc" =>Nan(Not a Number)
// true => 1; false => 0

let isLoggedIn = 1  // "" 
let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(typeof booleanIsLoggedIn)
// console.log(booleanIsLoggedIn)


// 1 => true; 0 => false 
// "" => false 
// "Vinay" => true


let someNumber = 33
let stringNumber = String(someNumber)
// console.log(typeof stringNumber)
// console.log(stringNumber)


// ************************ Operations  ************************
let value = 3
let negValue = -value
// console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2%2)
// console.log(2/2)


let str1 = "Hello"
let str2 = " Vinay"
let str3 = str1 + str2
// console.log(str3)

// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + 2 + 2)
// console.log(1 + 2 + "2")

// console.log((3 + 4) * 5 % 3);

// console.log(true);

// console.log(+true) // not prefer in dev
// console.log(+"") // not prefer in dev

let num1, num2, num3 
num1 = num2 = num3 = 2 + 2 // It's not more redable  just use 4
let gameCounter = 100
gameCounter++;  // 101
// ++gameCounter;  // 101

console.log(gameCounter)


// link to study -> postfix and prefix
// Conversion
// https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values