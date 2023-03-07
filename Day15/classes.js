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
    return this.skills
}
get getScore() {
    return this.score
}
set setScore(score) {
    this.score += score
}
set setSkill(skill) {
    this.skills.push(skill)
}
} 

const person1 = new Person('John', 'Doe',30,'USA')
const person2 = new Person('Muti', 'Çaliş',21,'Turkey')

person1.setScore = 1
person1.setSkill = 'HTML'
person1.setSkill = 'CSS'
person1.setSkill = 'JavaScript'

person2.setScore = 1
person2.setSkill = 'Planning'
person2.setSkill = 'Managing'
person2.setSkill = 'Organizing'

console.log(person1.score)
console.log(person2.score)

console.log(person1.skills)
console.log(person2.skills)


class Student extends Person {
    saySomething() {
      console.log('I am a child of the person class')
    }
  }
  
  const s1 = new Student('Muti', 'Çaliş', 'Turkiye', 21, 'Istanbul')
  console.log(s1)
  console.log(s1.saySomething())