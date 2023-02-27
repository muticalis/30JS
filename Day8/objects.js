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











