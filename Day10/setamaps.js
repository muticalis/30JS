const languages = [
'English',
'Finnish',
'English',
'French',
'Spanish',
'English',
'French',
]

const setOnLanguages = new Set(languages)
console.log(setOnLanguages) //Set(4) {'English', 'Finnish', 'French', 'Spanish'}

const companies = new Set()
console.log(companies.size) //0

companies.add('Google')
companies.add('Amazon')
companies.add('Meta')
companies.add('Tesla')
companies.add('Microsoft')

console.log(companies ) //Set(5) {'Google', 'Amazon', 'Meta', 'Tesla', 'Microsoft'}
console.log(companies.delete('Google'))
console.log(companies.has('Apple')) // false
companies.clear() 
console.log(companies) //Set(0) {}

const numbers = [5, 3, 2, 5, 5, 9, 4, 5]
const setOfNumbers = new Set(numbers)

console.log(setOfNumbers) //Set(5) {5, 3, 2, 9, 4}


countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
  ]

const map = new Map(countries)
console.log(map) //Map(3) {'Finland' => 'Helsinki', 'Sweden' => 'Stockholm', 'Norway' => 'Oslo'}
console.log(map.has('Finland')) //true