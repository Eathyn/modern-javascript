function sumInput() {
  let arr = []

  let input = prompt('enter a number')
  while (!isNaN(input) && input !== '' && input !== null) {
    arr.push(+input)
    input = prompt('enter a number')
  }

  let sum = 0
  for (const ele of arr) {
    sum += ele
  }

  return sum
}
