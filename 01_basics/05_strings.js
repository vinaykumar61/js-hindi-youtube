const name = "Vinay"
const repoCount = 10
console.log(name + repoCount +" Value");  // outdated

// Always use latest below pattern
// String Interpolation 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Vinay-k-k')

// console.log(gameName[0]); // Not working on chrome console
// console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
console.log(gameName.charAt(2)) // Index number se character ka pata karna
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 4) // same as python range function
console.log(newString)

const anotherString = gameName.slice(-7, 4)
console.log(anotherString)

const newStringOne = "    Vinay Kumar   "
console.log(newStringOne);
console.log(newStringOne.trim());

console.log(newStringOne.replace('a','o'));

console.log(newStringOne.replace('Kumar','Kardam'));

const url = "https://hitesh.com/Vinay%20Kumar"
console.log(url.replace('%20','-'));

console.log(url.includes('Kardam')) //pattern ko match karne k liye 
// Python in ki tarah
console.log(gameName.split('-'));


