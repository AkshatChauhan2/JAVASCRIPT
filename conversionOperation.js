let score = "33abc"                    // Declared as String

console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number(score)   // Datatype Conversion
console.log(typeof valueInNumber)

console.log(valueInNumber)          // NaN (Not a number becoz abc are not numbers but it will convert)

// "33" => 33
// "33abc" => NaN (Not a Number)
// true => 1; false => 0;

let isLoggedIn = 1

let booleanIsLoggerIn = Boolean(isLoggedIn)
console.log(booleanIsLoggerIn)

// 1=> true; 0=> false;
// "" => false; "akshat"=> true;

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// ********************* Operations *****************//

let value = 3
let negvalue = -value
console.log(negvalue);

/*
console.log(2+2)  // Add
console.log(2-2)  // Subtract
console.log(2/2)  // Divide
console.log(2*2)  // Multiply
console.log(2**3) // Power
console.log(2%3)  // Modulus (Remainder)
*/

let str1 = "Hello"
let str2 = " Akshat"

let str3 = str1 + str2
console.log(str3)

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1"+2+2); // 122
console.log(1+2+"2"); // 32

console.log(((3+4)*5)%3); // Easy

console.log(+true) // 1
console.log(+"") // 0

let num1, num2, num3 // Multiple Variables declared

num1 = num2 = num3 = 2+2

let gameCounter = 100
gameCounter++
++gameCounter
console.log(gameCounter);










