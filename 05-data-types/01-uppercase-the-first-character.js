function ucFirst(str) {
  if (!str) {
    return false
  } else {
    return `${str[0].toUpperCase()}${str.slice(1)}`
  }
}
