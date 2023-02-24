const fruits = ['banana','apple','orange']
console.log('Fruits:',fruits) //['banana', 'apple', 'orange']
console.log('Number of fruits:', fruits.length) //Number of fruits: 3


const arr1 = [
    'Muti',
    21,
    true,
    {country: 'Turkiye', city: 'Istanbul'}
]
console.log(arr1)


let js = 'Javascript'
const chars = js.split('')
console.log(chars) //['J', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']


const fruits1 = ['banana', 'orange', 'mango', 'lemon']
let firstFruit = fruits1[0]

console.log(firstFruit) // banana


const shoppingCart = [
    'Milk',
    'Mango',
    'Tomato',
    'Potato',
    'Avocado',
    'Meat',
    'Eggs',
    'Sugar'
  ]
  
  console.log(shoppingCart) 
  console.log(shoppingCart[0]) // Milk
  console.log(shoppingCart[7]) // Sugar
  
  let lastIndex = shoppingCart.length - 1;
  console.log(shoppingCart[lastIndex]) // Sugar


  const numbers1 = [1,2,3,4,5]
  numbers1[0] = 50
  console.log(numbers1) //[50,2,3,4,5]


  //Methods to manipulate array

  const arr2 = Array() // creates an an empty array
console.log(arr2)

const sixMvalues = Array(8).fill('M')
console.log(sixMvalues) //['M','M','M','M','M','M','M','M']


const firsList = [1,2,3]
const secondList = [4,5,6]
const thirdList = firsList.concat(secondList)
console.log(thirdList) // [1, 2, 3, 4, 5, 6]

const numbers2 = [1, 2, 3, 4, 5]
console.log(numbers2.length) // -> 5 is the size of the array


const numbers3 = [1, 2, 3, 4, 5]
console.log(numbers3.indexOf(5)) // -> 4


const numbers4 = [1, 2, 3, 4, 5, 3, 1, 2]
console.log(numbers4.lastIndexOf(2)) // 7


const numbers5 = [1, 2, 3, 4, 5]
console.log(numbers5.includes(5)) // true
console.log(numbers5.includes(0)) // false


const randoms = [1, 2, 3, 4, 5]
console.log(Array.isArray(randoms)) // true

const random = 100
console.log(Array.isArray(random)) // false


const names = ['Mustafa','Adar','Furkan','Fatih']
console.log(names.join(' #')) //Mustafa #Adar #Furkan #Fatih


const numbers6 = [1,2,3,4,5]
console.log(numbers6.slice(1,4)) // -> [2,3,4]


const example = [1,2,3,4,5,6]
example.push(7)
console.log(example) //[1, 2, 3, 4, 5, 6, 7]

const numbers7 = [1, 2, 3, 4, 5]
numbers7.pop() // -> remove one item from the end
console.log(numbers7) // -> [1,2,3,4]


const numbers8 = [1, 2, 3, 4, 5]
numbers8.shift() // -> remove one item from the beginning
console.log(numbers8) // -> [2,3,4,5]



const numbers9 = [1, 2, 3, 4, 5]
numbers9.unshift(0) // -> add one item from the beginning
console.log(numbers9) // -> [0,1,2,3,4,5]


const numbers10 = [1, 2, 3, 4, 5]
numbers10.reverse() // -> reverse array order
console.log(numbers10) // [5, 4, 3, 2, 1]



//Array of arrays

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = [frontEnd, backEnd]
console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
console.log(fullStack.length)  // 2
console.log(fullStack[0])  // ["HTML", "CSS", "JS", "React", "Redux"]
console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]