// recursion version
const recursion = function printReverseList(list) {
  if (list.next) {
    printReverseList(list.next)
  }

  console.log(list.value)
}

// loop-based version
const loop = function printReverseList(list) {
  const arr = []
  let temp = list

  while (temp) {
    arr.push(temp.value)
    temp = temp.next
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i])
  }
}
