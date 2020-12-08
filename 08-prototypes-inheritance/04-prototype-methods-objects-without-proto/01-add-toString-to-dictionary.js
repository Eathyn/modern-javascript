const dictionary = Object.create(null, {
  toString: {
    value() {
      return Object.keys(this).join(',')
    },
  }
})

dictionary.apple = 'apple'
dictionary.__proto__ = 'test'
console.log(dictionary.toString())
