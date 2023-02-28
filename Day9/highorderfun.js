const fonksiyon = number => number ** 2



function cube(cb,number) {
    return cb(number) * number
}
console.log(cube(fonksiyon,3)) // 27



const numbers = [1,3,5,7,9]
let total = 0
numbers.forEach(number => total += numbers)
console.log(total) // 25

function sayHello() {
    console.log('Hello')
}

//setInterval(sayHello,1000) // 1000ms = 1s



function sayHello() {
    console.log('Hello')
  }
  setTimeout(sayHello, 2000) // it prints hello after it waits for 2 seconds.



  //Functional Programming

  let sum = 0
  const random = [1,2,3,4,5]
random.forEach(num => console.log(num))
console.log(sum) // 1 2 3 4 5 




let sums = 0;
const randoms = [1, 2, 3, 4, 5];
numbers.forEach(num => sums += num)

console.log(sums) // 15



const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countries.forEach((element) => console.log(element.toUpperCase())) // FINLAND DENMARK SWEDEN NORWAY ICELAND



const numberss = [1, 2, 3, 4, 5]
const numbersSquare = numberss.map((num) => num * num)

console.log(numbersSquare) // [1, 4, 9, 16, 25]



const countriess = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]
  const countriesToUpperCase = countries.map((country) => country.toUpperCase())
  console.log(countriesToUpperCase)
  
  const countriesContainingLand = countries.filter((country) =>  country.includes('land')
)
console.log(countriesContainingLand) //['Finland', 'Iceland']


const countriesHaveFiveLetters = countriess.filter(
    (country) => country.length === 5
  )
  console.log(countriesHaveFiveLetters)  // ['Japan', 'Kenya']

  const numbersss = [1, 2, 3, 4, 5]
const totals = numbersss.reduce((oldValue, currentValue) => oldValue + currentValue, 0)

console.log(totals) // 15


const names = ['Muti','Ado','Fatih']
const allTrue = names.every((name)=> typeof name === 'string')
console.log(allTrue) //true




const people = ['Muti', 'Ado', 'Fatih']
const ages = [24, 22, 25, 32, 35, 18]

const result = people.findIndex((name) => name.length < 4 ) //1
const age = ages.find((age) => age < 20)
console.log(age) //18



const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort()) // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
