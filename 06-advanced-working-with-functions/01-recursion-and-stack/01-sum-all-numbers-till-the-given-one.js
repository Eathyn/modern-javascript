function sumTo_1(n) {
  let res = 0

  for (let i = 1; i <= n; i++) {
    res += i
  }

  return res
}

function sumTo_2(n) {
  return n === 1 ? 1 : n + sumTo_2(n - 1)
}

function sumTo_3(n) {
  return n * (n - 1) / 2
}
