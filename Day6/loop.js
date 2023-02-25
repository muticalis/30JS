for(let i =0; i <=5; i++) {
    console.log(i)
} // 0 1 2 3 4 5

for(let i = 5; i >= 0; i--){
    console.log(i)
  } // 5 4 3 2 1 0


const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for(let i = 0; i < countries.length; i++){
  newArr.push(countries[i].toUpperCase())
   console.log(countries)
} 

// ["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]



const numbers = [1,2,3,4,5]
let sum = 0
for (let i = 0; i <numbers.length; i++) {
 sum = sum + numbers[i]
}

console.log(sum) //15



let i = 0
while (i <=5) {
    console.log(i)
    i++;
} // 0 1 2 3 4 5

let m = 0
do {
  console.log(m)
  m++
} while (i <= 5) // 0 1 2 3 4 5

for (const num of numbers) {
    console.log(num * num)
  }// 1 4 9 16 25


  for(let i = 0; i <= 5; i++){
    if(i == 3){
      break
    }
    console.log(i)
  }// 0 1 2

  for(let i = 0; i <= 5; i++){
    if(i == 3){
      continue
    }
    console.log(i)
  } // 0 1 2 4 5