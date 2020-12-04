// using setInterval
function printNumbers_interval(from, to) {
  const timerId = setInterval(() => {
    if (from <= to) {
      console.log(from)
      from++
    } else {
      clearInterval(timerId)
    }
  }, 1000)
}

// using setTimeout
function printNumbers_timeout(from, to) {
  let timerId = setTimeout(function print(){
    if (from <= to) {
      console.log(from)
      from++
      timerId = setTimeout(print, 1000)
    } else {
      clearTimeout(timerId)
    }
  }, 1000)
}
