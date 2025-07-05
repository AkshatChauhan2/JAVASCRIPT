
//  Primitive

//  7 types : String, Number, Boolea n, null, undefined, Symbol, BigInt

const score = 100        // number
const scoreValue = 100.3 // number

const isLoggedIn = false // boolean
const outsideTemp = null // null
let userEmail;           // undefined

const id = Symbol('123')          // symbol
const anotherId = Symbol('123')   // symbol

console.log(id === anotherId);    // false becoz both id will be unique

// const bigNumber = 3456543576654356754n   // bigint



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];   // Array


let myObj = {                                     // Object
    name: "akshat",
    age: 22,
}


const myFunction = function(){                    // Function
    console.log("Hello world");
}

console.log(typeof anotherId);                    // Symbol

/*
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

*/

// https://262.ecma-international.org/5.1/#sec-11.4.3


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//                    Memory 

//  Stack (Primitive) , Heap (Non-Primitive)


let myYoutubeName = "akshat"

let anotherName = myYoutubeName
anotherName = "akshuuu"

console.log(anotherName);
console.log(myYoutubeName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "akshat@google.com"

console.log(userOne.email);
console.log(userTwo.email);


