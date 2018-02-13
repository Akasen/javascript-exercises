var reverseString = function(inputString) {

  let reverseString = ""

  for(i = inputString.length - 1; i >= 0; i--) {
    reverseString += inputString[i]
  }

  return reverseString
}

module.exports = reverseString
