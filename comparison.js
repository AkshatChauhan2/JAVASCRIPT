/*
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 <= 1);
console.log(2 == 1);
console.log(2 != 1);
*/

console.log("2" > 1); // JS will automatically convert the string "2" into 2.
console.log("02" > 1); // Same

/* Avoid these

console.log(null > 0); // false 
console.log(null == 0); // false
console.log(null >= 0); // true (comparisons convert null to zero)

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false

*/

// === (check value strictly means will check value and datatype too)

console.log("2" === 2); // false (datatype is different)









