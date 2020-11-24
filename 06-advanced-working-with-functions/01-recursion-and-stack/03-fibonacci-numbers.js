function fib_1(n) {
  return (n === 1 || n === 2) ? 1 : fib_1(n -1 ) + fib_1(n - 2)
}

function fib_2(n) {
  let a = 1
  let b = 1
  for (let i = 3; i <= n; i++) {
    let c = a + b
    a = b
    b = c
  }
  return b
}
