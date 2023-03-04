console.log('30 days of Javascript')



console.log('%cStop', 'color:green') // log output is green

console.warn('Be careful')


console.error('This is an error message')

const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
  console.table(countries)

  console.info('30 Days Of HTML and CSS challenge might be released')


  for (let i = 0; i <= 10; i += 1) {
    let errorMessage = `${i} is not even`
    console.log('the # is ' + i)
    console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage })
  }



  const func = () => {
    console.count('Function has been called')
  }
  func()
  func()
  func()