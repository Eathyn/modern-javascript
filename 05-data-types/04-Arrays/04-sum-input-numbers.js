function sumInput() {
  let numbers = []

  while (true) {
    const userInput = prompt('enter a number')
    if (isNaN(userInput) || userInput === '' || userInput === null) {
      break
    } else {
      numbers.push(+userInput)
    }
  }

  let sum = 0
  for (const number of numbers) {
    sum += number
  }

  return sum
}
