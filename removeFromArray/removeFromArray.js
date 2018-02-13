var removeFromArray = function(list, removeVars) {

  let positon = ''

  for(i = 0; i < arguments.length; i++) {
    //position = list.indexOf()
    if(arguments[0].indexOf(arguments[i]) != -1) {
      if(i > 0) {
        arguments[0].splice(arguments[0].indexOf(arguments[i]), 1)
      }
    }
  }

  return list
}

module.exports = removeFromArray
