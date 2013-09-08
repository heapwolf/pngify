pngify
======

convert text data into a png and back to text again, pure js, no deps.

```js
var key = fs.readFileSync(__dirname + '/test.key', 'utf8')
pngify.encodeImage(key, __dirname + '/test.png', function(err) {
  if (err) {
    console.log(err)
  }
  pngify.decodeImage(__dirname + '/test.png', function(err, str) {
    assert.deepEqual(str, key, 'extracted string and original string should be the same')
  })
})
```

