
// Dates

let myDate = new Date()
// console.log(myDate.toString());  // String
// console.log(myDate.toDateString()); // Date
// console.log(myDate.toLocaleString()); // Date and time
// console.log(typeof myDate); // Object

// let myCreatedDate = new Date(2023, 0, 23) // year month day
// let myCreatedDate = new Date(2023, 0, 23, 5, 3) // year month day hour minute
// let myCreatedDate = new Date("2023-01-14") // YY-MM-DD
let myCreatedDate = new Date("01-14-2023") // MM--DD--YY
// console.log(myCreatedDate.toLocaleString()); // 01-14-2023  12 AM

let myTimeStamp = Date.now() // Exact Time

// console.log(myTimeStamp); // Milisecond
// console.log(myCreatedDate.getTime()); //  Exact time milisecond
// console.log(Math.floor(Date.now()/1000)); // Seconds me converted

let newDate = new Date() 
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
