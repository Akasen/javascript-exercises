var repeatString = function(phrase, repeats) {

  let holdPhrase = ''

  if(repeats < 0) {
    holdPhrase = 'ERROR'
  }

  for(i = 0; i < repeats; i++) {
    holdPhrase = holdPhrase + phrase
  }

  return holdPhrase
}

module.exports = repeatString
