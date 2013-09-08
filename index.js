var encode = require('./lib/encode')
var decode = require('./lib/decode')
var fs = require('fs')

exports.encode = encode
exports.decode = decode

exports.encodeImage = function(value, file, callback) {

  var sqrt = Math.ceil(Math.sqrt(value.length))
  var pos = 0
  var png = encode(sqrt, sqrt, 256)

  for (var i = 0, il = sqrt; i < il; i++) {
    for (var j = 0, jl = sqrt; j < jl; j++) {
      if (!value[pos]) { 
        png.buffer[png.index(i, j)] = png.color(0x00, 0x00, 0x00) 
      }
      else {
        png.buffer[png.index(i, j)] = png.color(value.charCodeAt(pos), 0x00, 0x00)
      }
      pos++
    }
  }
  fs.writeFile(file, png.getBase64(), { encoding: 'base64' }, callback)
}

exports.decodeImage = function(filename, callback) {

  fs.readFile(filename, function(err, rawdata) { 

    decode(rawdata, function(err, data) {

      if (err) {
        return console.log(err)
      }

      var sqrt = Math.sqrt(data.length)/2 
      var pos = 0
      var pxlen = 4
      var matrix = Array(sqrt)

      for (var w = 0; w < sqrt; w++) {
        matrix[w] = Array(sqrt)
      } 

      for (var w = 0; w < sqrt; w++) {
        for (var h = 0; h < sqrt; h++) {
          if (data[pos] === 10) {
            matrix[h][w] = '\n'
          }
          else if (data[pos] !== 0) {
            matrix[h][w] = String.fromCharCode(data[pos])
          }
          pos+=pxlen
        }
      }
      for (var i = 0; i < matrix.length; i++) {
        matrix[i] = matrix[i].join('')
      }

      callback(null, matrix.join(''))
    })
  })
}

