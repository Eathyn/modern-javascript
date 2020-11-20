function aclean(arr) {
  const map = new Map()

  for (const word of arr) {
    const sorted = word.toLowerCase().split('').sort().join('')
    map.set(sorted, word)
  }

  return Array.from(map.values())
}
