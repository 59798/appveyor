// dependencies
var assert = require('power-assert')
var path = require('path')

// target
var simplayer = require('../lib/simplayer')

// fixtures
var fileName = path.join(process.cwd(), 'fixture.wav')
var fileMsec = 800 // abount

// specs
it('should to exit the process at 0 at the time of play end', function (done) {
  var begin = Date.now()

  var child = simplayer(fileName)
  child.stdout.pipe(process.stdout)
  child.stderr.pipe(process.stderr)
  child.on('exit', function (code) {
    var end = Date.now()
    assert(code === 0)
    assert(end - begin > fileMsec)
    done()
  })
})
