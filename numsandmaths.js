
const score = 400
// console.log(score);

const balance = new Number(100)
 console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

console.log(Number.isFinite());
console.log(Number.MAX_VALUE);


// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));    // Only Negative value will be converted into positive value
// console.log(Math.round(4.6)); // Will round off 4.6 to 5
// console.log(Math.ceil(4.2));  // Greater value will be choosen 4.2 will be converted to 5
// console.log(Math.floor(4.9)); // Lesser value will be choosen 4.9 will be converted to 4
// console.log(Math.min(4, 3, 6, 8)); 
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.sqrt(25));
console.log(Math.pow(2,3));


console.log(Math.random());              // Value always come between 0 to 1
console.log((Math.random()*10) + 1);     // value wont be zero
console.log(Math.floor(Math.random()*10) + 1); // value will be round off 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // floor will round off the value
                                                               // max - min + 1 will give the value b/w 0 to 10 but when we add (+min) then min was 10 so the value will come b/w 10 to 20.
                                                            