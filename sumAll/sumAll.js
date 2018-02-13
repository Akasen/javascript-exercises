var sumAll = fstringunction(a, b) {

  var sum = 0
  var first = 0
  var last = 0

  if(a > b) {
    first = b
    last = a
  }
  else {
    first = a
    last = b
  }

  for(i=first; i<=last; i++) {
    sum += i
  }

  if(typeof a !== "number" || typeof b !== "number") {
    sum = 'ERROR'
  }

  if(sum < 0) {
    sum = 'ERROR'
  }

  //console.log(sum)
  return sum
}

module.exports = sumAll
