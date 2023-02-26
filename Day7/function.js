function square () {
    let num = 2
    let sq = num * num 
    console.log(sq)
} // 4

function addTwoNumbers() {
    let numOne = 10
    let numTwo = 20
    let sum = numOne + numTwo
  
    console.log(sum)
  }
  
  addTwoNumbers()  // 30 


  function printFullName (){
    let firstName = 'Muti'
    let lastName = 'Çalış'
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
}
console.log(printFullName())  //Muti Çalış

function addTwoNumbers() {
    let numOne = 2
    let numTwo = 3
    let total = numOne + numTwo
    return total

}
console.log(addTwoNumbers())


function square(number) {
    return number * number
  }
  
  console.log(square(10)) // 100


  function sumTwoNumbers (numOne,numTwo) {
    let sum = numOne + numTwo
    return sum
  } 

  console.log(sumTwoNumbers(20,50)) //70

  function sumArrayValues(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum;
  }
  const numbers = [1, 2, 3, 4, 5];
      //calling a function
  console.log(sumArrayValues(numbers)); //15



  function sumAllNums () {
    let sum = 0
    for (let i = 0; i<arguments.length; i++) {
      sum += arguments[i]
    }
     return sum 
  }
  console.log(sumAllNums(10, 20, 13, 40, 10))  // 93

  const sumAllNums = (...args) => {
    let sum = 0
    for (const element of args) {
      sum += element
    }
    return sum
  }
  
  console.log(sumAllNums(1, 2, 3, 4)) // 10


const square = function(n) {
  return n*n
}
console.log(square(5)) //25


const changeToUpperCase = arr => {
  const newArr = []
  for (const element of arr) {
    newArr.push(element.toUpperCase())
  }
  return newArr
}

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(changeToUpperCase(countries))

// ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]

const printFullName = (firstName, lastName) => `${firstName} ${lastName}`

console.log(printFullName('Muti', 'Çalış'))