
var encoder = require('./index')
var assert = require('assert')
var fs = require('fs')

var key = fs.readFileSync(__dirname + '/test.key', 'utf8')
encoder.encodeImage(key, __dirname + '/test.png', function(err) {
  if (err) {
    console.log(err)
  }
  encoder.decodeImage(__dirname + '/test.png', function(err, str) {
    assert.deepEqual(str, key, 'extracted string and original string should be the same')
  })
})

