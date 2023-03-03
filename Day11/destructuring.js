const numbers = [2,4,6]
const [number1,number2,number3] = numbers

console.log(number1) //2
console.log(number2) //4
console.log(number3) //6


const stack = [
    ['HTML','CSS','JAVASCRİPT'],
    ['GOLANG','PYTHON','JAVA']
]

const [frontend,backend] = stack
console.log(frontend) //['HTML', 'CSS', 'JAVASCRİPT']
console.log(backend) // ['GOLANG','PYTHON','JAVA']


  const numbers1 = [1, 2, 3]
  let [numOne, , numThree] = numbers1  //2 is omitted

  console.log(numOne, numThree) 


  const randoms = [14, undefined, 10]
  const [
    number11,
    number12 = 1,
    number13,

  ] = randoms
  console.log(number12) //1


  const nums = [1,2,3,4,5,6,7,8,9,10]
  let [num1,num2,num3,...rest] = nums
  console.log(num1,num2,num3) //1 2 3
  console.log(rest) //[4, 5, 6, 7, 8, 9, 10]


  const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]
for (const [country,city] of countries) {
    console.log(country,city) //Finland Helsinki...
}

const rectangle = {
    width:20,
    height:10,
    area:200
}
let { width, height, area, perimeter } = rectangle

console.log(width, height, area, perimeter) //20 10 200 undefined

const rectangle2 = {
    width: 20,
    height: 10,
    area: 200
  }
  let { width: w, height: h, area: a, perimeter: p } = rectangle2
  console.log(w, h, a, p) //Renaming during structuring

  
  
  
  const rect = {
    width: 20,
    height: 10
  }
  const calculatePerimeter = rectangle => {
    return 2 * (rectangle.width + rectangle.height)
  }
    console.log(calculatePerimeter(rect)) // 60



    const calculate = ({width,height}) => {
        return 2 * (width + height)
    }
    console.log(calculate(rect)) //60

    
    
    
    const user = {
        name: 'Muti',
        title: 'Programmer',
        country: 'Türkiye',
        city:'Istanbul'
    }

    const copiedUser = {...user}
    console.log(copiedUser) //{name: 'Muti', title: 'Programmer', country: 'Türkiye', city: 'Istanbul'}




    const sumAllNums = (...args) => {
        let sum = 0 
        for (const num of args) {
            sum += num
        }
        return sum
    }
    console.log(sumAllNums(2,3,4,5)) //14 