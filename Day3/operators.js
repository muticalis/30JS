//Booleans

let trueValue = 4 > 3 //true
let falseValue = 4 < 3 //false

let firstName
console.log(firstName) // undefined 

let empty = null
console.log(empty) //null , no value 


//Arithmetic Operators

let numOne = 4
let numTwo = 3 
let sum = numOne + numTwo 
let diff = numOne - numTwo
let mult = numOne * numTwo
let div = numOne / numTwo
let remainder = numOne % numTwo
let powerOf = numOne ** numTwo

console.log(sum, diff, mult, div, remainder, powerOf) // 7,1,12,1.33,1, 64

//Comparison Operators

console.log(3 >= 2)             // true, because 3 is greater than 2
console.log(3 < 2)              // false,  because 3 is greater than 2
console.log(2 < 3)              // true, because 2 is less than 3
console.log(2 <= 3)             // true, because 2 is less than 3
console.log(3 == 2)             // false, because 3 is not equal to 2
console.log(3 != 2)             // true, because 3 is not equal to 2
console.log(3 == '3')           // true, compare only value
console.log(3 === '3')          // false, compare both value and data type
console.log(3 !== '3')          // true, compare both value and data type
console.log(3 != 3)             // false, compare only value
console.log(3 !== 3)            // false, compare both value and data type
console.log(0 == false)         // true, equivalent
console.log(0 === false)        // false, not exactly the same
console.log(0 == '')            // true, equivalent
console.log(0 == ' ')           // true, equivalent
console.log(0 === '')           // false, not exactly the same
console.log(1 == true)          // true, equivalent
console.log(1 === true)         // false, not exactly the same
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, not equal
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number



console.log('apple'.length == 'banana'.length) //false
console.log('apple'.length != 'banana'.length) //true



//Logical Operators

const check1 = 5 > 4 && 10 > 5 //true-true => true
const check2 = 5 > 4 && 10 < 5 //true-false => false
const check = 4 < 3 && 10 < 5  // false-false => false

const check4 = 10 > 3 || 2 > 1 //true-true => true
const check5 = 10 > 3 || 2 < 1 //true-false => true
const check6 = 10 < 3 || 2 < 1 // false-false => false

let check7 = !(4 > 3) //false


//Increment Operator
