
const name = "akshat"
const repoCount = 50

// console.log(name + repoCount + " Value"); // Not Readable

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // More Readable (String Interpolation)

const gameName = new String("akshat-ac")
console.log(gameName);


 console.log(gameName[0]);      // h
 console.log(gameName.__proto__); // {}


 console.log(gameName.length);        // Length of String
 console.log(gameName.toUpperCase()); // AKSHATAC
console.log(gameName.charAt(2));    // s
console.log(gameName.indexOf('t'));   // 5

const newString = gameName.substring(0, 4) // aksh
console.log(newString);

const anotherString = gameName.slice(-6, 4)  // Start from Reverse 
console.log(anotherString);

const newStringOne = "   akshat    "    
console.log(newStringOne);
console.log(newStringOne.trim());    // Remove Spaces

const url = "https://akshat.com/akshat%20chauhan"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-')); 
