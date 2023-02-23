const fruits = ['banana','apple','orange']
console.log('Fruits:',fruits) //['banana', 'apple', 'orange']
console.log('Number of fruits:', fruits.length) //Number of fruits: 3


const arr = [
    'Muti',
    21,
    true,
    {country: 'Turkiye', city: 'Istanbul'}
]
console.log(arr)


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