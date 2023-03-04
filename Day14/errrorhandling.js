try {
    let lastName = 'Çalış'
    let fullName = firstName + ' ' + lastName
} catch (err) {
    console.log(err)
} //ReferenceError: firstName is not defined


try {
    let lastName = 'Çalış'
    let fullName = fistName + ' ' + lastName
  } catch (err) {
    console.log('Name of the error', err.name)
    console.log('Error message', err.message)
  } finally {
    console.log('In any case I will be executed')
  }



  const throwError = () => {
    let message
    let x = prompt('Enter a number: ')
    try {
      if (x == '') throw 'empty'
      if (isNaN(x)) throw 'not a number'
      x = Number(x)
      if (x < 5) throw 'too low'
      if (x > 10) throw 'too high'
    } catch (err) {
      console.log(err)
    }
  }
  throwError()