ad = 'Muti' //window scope

let name = 'Muti'
let surnmame = 'Çaliş'

function letsLearnScope () {
    console.log(name,surnmame) //Muti Çaliş
if(true) {
    let name = 'Adar'
    let surnmame = 'Sonmezer'
console.log(name,surnmame) //Adar Sonmezer

}
console.log(name,surnmame) //Muti Çaliş


}

letsLearnScope()
console.log(name,surnmame) //Muti Çaliş




//OBJECTS

const user = {
    name: 'Muti',
    surnmame: 'Çaliş',
    isMarried: false,
    age:21,
    skills: [
        'HTML',
        'CSS',
        'JAVASCRİPT',
        'PYTHON'
    ]
}

console.log(user.name) //Muti


const person = {
    name: 'Muti',
    surnmame: 'Çaliş',
    isMarried: false,
    age:21,
    skills: [
        'HTML',
        'CSS',
        'JAVASCRİPT',
        'PYTHON'
    ],
   getFullName: function() {
        return `${this.name}${this.surnmame}`
   }
}

console.log(person.getFullName()) //MutiÇaliş




