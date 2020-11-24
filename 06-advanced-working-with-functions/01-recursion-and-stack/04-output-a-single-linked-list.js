// recursive solution
function printList_1(list) {
  console.log(list.value)
  if (list.next) {
    printList_1(list.next)
  }
}

// loop-based solution
function printList_2(list) {
  while (list) {
    console.log(list.value)
    list = list.next
  }
}
