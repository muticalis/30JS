class Person {
constructor (firstName,lastName,age,country,city) {
this.firstName = firstName
this.lastName = lastName
this.age = age
this.country = country
this.city = city
this.skills = []
this.score = 0
}
getFullName() {
    return this.firstName + ' ' + this.lastName
}
get getSkills () {
    return this.getSkills
}
get getScore() {
    return this.getScore
}
} 

const person1 = new Person('John', 'Doe',30,'USA')
const person2 = new Person('Muti', 'Çalış',21,'Turkey')
const person3 = new Person('Adar', 'Sönmez',22,'Portugal')
console.log(person1.skills,
    person2,
    person3)
