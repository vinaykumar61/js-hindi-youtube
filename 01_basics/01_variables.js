// Assume to create User Account

const accountId = 1245
let accountEmail = "vinay.kumar@gmail.com"
var accountPassword = "2580"
accountCity = "Noida" // Not a good way 
let accountState;
// Semicolon is not mandatory in js
// accountId = 2  // not allowed

accountEmail = "vk@vk.com"
accountPassword = "2121221"
accountCity ="Delhi"

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountState])
