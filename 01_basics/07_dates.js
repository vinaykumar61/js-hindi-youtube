// Dates: ( It is a complex topic so do more practice of this module-video-13)

let myDate = new Date()
// console.log(myDate); // 2024-11-26T02:19:50.818Z
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.toISOString());
// console.log(typeof myDate);
// Note: In JS Date is an object

// let myCreatedDate = new Date(2023, 0, 23) // Month start from 0 (0-11)
// console.log(myCreatedDate);




// let myCreatedDate = new Date(2023, 0, 23, 5,3)
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString());


// Indian use -mm-dd-year
let myCreatedDate = new Date("01-14-2024")
console.log(myCreatedDate.toLocaleString());


// Timestamps
let myTimeStamp = Date.now()  // 1-jan-1970 se current time tak ko miliseconds m convert karke deta hai
console.log(myTimeStamp);  
// This method returns the number of milliseconds since January 1, 1970, 00:00:00 UTC, just like the getTime() method.

console.log(myCreatedDate.getTime()); // Milliseconds
console.log("Convert Miliseconds to Seconds:",Math.floor(Date.now()/1000)); // Seconds


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());


// `${newDate.getMonth()+1} and the day is ${newDate.getDay()}`  

// Important, mostly use in dev and Interested

console.log(newDate.toLocaleString('default',{
    weekday: "long",
}
    
));

