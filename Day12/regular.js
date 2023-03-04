//let pattern = 'love'
let flag = 'gi'
//let regEx = new RegExp(pattern,flag)


const word = 'Are you kidding me?'
const pattern = /kidding/
const result = pattern.test(word)
console.log(result)


const string = 'I lOve javascript and i love software'
console.log(
    string.match(/love/ig)
)



const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/python/gi, 'JavaScript')
console.log(matchReplaced) //JavaScript is the most beautiful language that a human begin has ever created.I recommend python for a first programming language
