var ftoc = function(f) {
  var c

  c = Math.round((f-32) * 5/9 * 10) / 10

  return c
}

var ctof = function(c) {
  var f

  f = Math.round(((c * 9/5) + 32) * 10) / 10

  return f
}

module.exports = {
  ftoc,
  ctof
}
