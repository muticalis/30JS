//const h1 = document.getElementsByTagName('h1')
//const h1 = document.getElementsByClassName('title-1')
//const title = document.getElementById('title')
//title.style.color = 'red' 
//title.style.className = 'kayseri '

//title.setAttribute('style','color:blue; background-color:black')


/*console.log(
    document.querySelectorAll('.title-1')) 

/*

let len = h1.length
for (let i = 0; i < len; i++) {
    console.log(
        h1[i]
    )
}
*/

document.querySelectorAll('h1').forEach((h1,index) => {
    if(index %2 == 0) {
        h1.style = 'green'
        h1.style.fontSize = '55px'
    } else {
        h1.style.color = 'yellow'
    }
})
