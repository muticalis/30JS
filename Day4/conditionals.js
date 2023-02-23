let num1 = 5
if (num1 > 0) {
    console.log(`${num1} is a positive number.`) // 5  is a positive number.
}


let num2 = -5
if (num2 > 0) {
    console.log(`${num2} is a positive number.`)
} else {
    console.log(`${num2} is a negative number`)
} // -5 is a negative number.


let a = 0
if (a > 0) {
    console.log(`${a} is a positive number.`)
} else if (a < 0) {
    console.log(`${a} is a negative number`)
} else if (a == 0) {
    console.log(`${a} is a zero`)
} else {
    console.log(`${a}is a not number`)
} // 0 is a zero :/


let today = 'sunny'
if (today === 'rainy') {
  console.log('You need a rain coat.')
} else if (today === 'cloudy') {
  console.log('It might be cold, you need a jacket.')
} else if (today === 'sunny') {
  console.log('Go out freely.')
} else {
  console.log('No need for rain coat.')
 } // Go out freely.



let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')


  let weather = 'cloudy'
switch (weather) {
  case 'rainy':
    console.log('You need a rain coat.')
    break
  case 'cloudy':
    console.log('It might be cold, you need a jacket.')
    break
  case 'sunny':
    console.log('Go out freely.')
    break
  default:
    console.log(' No need for rain coat.')
} //It might be cold, you need a jacket.