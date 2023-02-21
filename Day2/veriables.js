

//Primitive Data Types
let numOne = 2
let numTwo = 2

console.log(numOne == numTwo) //true

let js = 'Javascript'
let py = 'Python'

console.log(js == py) //false 

let bool1 = true
let bool2 = false

console.log(bool1 == bool2) //false

let nums = [1,2,3]

nums[0] = 10
nums[1] = 20
nums[2] = 30

console.log(nums) // mutable 

let nums1 = [1,2,3]
//let nums2 = [1,2,3]
let nums2 = nums1 //true.Referance
console.log(nums1 == nums2) // false. Non-primitive data types cannot be compared by value

let user1 = {
    name: 'Muti',
    age: '21'
}

let user2 = {
    name: 'Muti',
    age: '21'
}

console.log(user1 == user2) //false. Rule of thumb, we do not compare non-primitive data types. Do not compare arrays, functions, or objects.

//Numbers

let age = 21
const gravity = 9.81 //const is used for constant values.


//Math Object

const PI = Math.PI

console.log(PI)// 3.141592653589793
console.log(Math.round(PI))                // 3 to round values to the nearest number

console.log(Math.round(9.81))              // 10

console.log(Math.floor(PI))                // 3 rounding down

console.log(Math.ceil(PI))                 // 4 rounding up

console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5, returns the minimum value

console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20, returns the maximum value

//Strings

let space = ' ' // empty strings
let who = 'Muti'
let surname = 'Çalış'

let fullName = who + space + surname; //concatenation

console.log(fullName) // Muti Çalış


//Template Literals 

let a = 3
let b = 4

console.log(`The sum of ${a} and ${b} is ${a + b}`)


let m = 2
let n = 3
console.log(`${m} is greater than ${n}: ${m > n}`)


//String Methods

let city = 'Istanbul'
console.log(city.length) //8


let strings1 = 'Python'
console.log(strings1.toUpperCase()) //PYTHON

let strings2 = 'JavasCript'
console.log(strings2.toLowerCase()) //javascript

let country = 'Turkey'
console.log(country.substr(3, 4)) //key

let language = 'English'
console.log(language.substring(2,3))//g

let random = '30 days of Javascript'
console.log(random.split(' ')) //['30', 'days', 'of', 'Javascript']

let string3 = '   30 Days Of JavaScript   '
console.log(string3) //       30 Days Of JavaScript 
console.log(string3.trim(' '))//30 Days Of JavaScript 


let string4= '30 Days Of JavaScript'
console.log(string4.includes(30)) //true

let country2 = 'Finland'
console.log(country2.replace('Fin', 'Noman'))//Nomanland

let string5 = '30 Days Of JavaScript'
console.log(string5.indexOf('D'))// 3

let string6 = '30'
console.log(string6.concat("Days", "Of", "JavaScript")) //30DaysOfJavaScript



let string7 = 'Love is the best to in this world'
console.log(string7.startsWith('Love'))// true


let string8 = 'Love is the most powerful feeling in the world'
console.log(string8.endsWith('world')) //true


let again = 'pain'
console.log(again.repeat(10)) //painpainpainpainpainpainpainpainpainpain


//Changing Data Type (Casting)
  

let firstName = 'Muti'      // string
let lastName = 'Çalış'        // string
let country1 = 'Turkey'         // string
let city1 = 'Istanbul'           // string
let age1 = 21                  // number, it is not my real age, do not worry about it
let job                         // undefined, because a value was not assigned

console.log(typeof 'Muti')  // string
console.log(typeof firstName)   // string
console.log(typeof 10)          // number
console.log(typeof 3.14)        // number
console.log(typeof true)        // boolean
console.log(typeof false)       // boolean
console.log(typeof NaN)         // number
console.log(typeof job)         // undefined
console.log(typeof undefined)   // undefined
console.log(typeof null)        // object




//String to Int

   let example = '10'
   let exampleInt = parseInt(example)
   console.log(exampleInt) //10

   //String to Float

let num = '9.81'
let numFloat = parseFloat(num)
console.log(numFloat) // 9.81