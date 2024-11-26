const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(3)) //IMp.
// 124

// console.log(otherNumber.toPrecision(3)) //IMp.
// otherNumber=1123.8966-> 1.12e+3

const hundres = 1000000
// console.log(hundres.toLocaleString('en-IN'));
// 10,00,000     , lagakar dega indian format m


// ++++++++++++++++++++++Maths+++++++++++++++++++++
 
console.log(Math);
console.log(Math.abs(-4));    // negative value positive ho jati hai
// postive as it is rahegi

console.log(Math.round(Math.round(4.8))) 
// .5 ya .5 se upar ki value k liye 1 add ho jayega number //4.5 ya 4.6->5
//4.3-> 4

// console.log(Math.round(Math.ceil(4.0))) //maximum value  5
// console.log(Math.round(Math.floor(4.9))) 
// console.log(Math.round(Math.min(1,5,6,7,8))) 
// console.log(Math.round(Math.max(4,3,2,1))) 

console.log(Math.round(Math.random())) // By default 0-1 k beech ki value date hai
console.log((Math.random()*10)+1);
console.log((Math.floor(Math.random()*10))+1);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

