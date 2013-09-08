# SYNOPSIS
Encodes text as a png file, decodes png files as text, pure js, no deps.

## EXAMPLE

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

### INPUT
```text
-----BEGIN RSA PUBLIC KEY-----
MIIBCgKCAQEAimFv717BrOYnUnHBbVqZM5OJOvArd58Llp+aWCRj8J72iymG25old5uuoMsV
M261xhGLUZY1dkfbLM/fKrGVLtobpaHJ/nqE5sRdLb52ybyfp0dEMX/oHu9OfNuKwqFuiKxQ
6/eTBYdmOiLeZ46EaQYCAa1wc21w3tCq+jvacWy2a34E2d0pMnpHxlH3jSO1cviTNIFmMEaf
Y93IpzYqgN3qbL5/uMMjWxkVHJLMJtx7MAMC2zbQIx6+tmwWrOc/N8GeQdGtTrQSqv7mwg2/
3evVw3UBtK2dqALUlGhcsmLKk3hg9/h933WvM0nCJQrHnTk3mmylQelZA6NFJ6JJlQIDAQAB
-----END RSA PUBLIC KEY-----
```

### OUTPUT

![test.png](/test.png)

