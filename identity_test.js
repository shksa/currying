const identity = require('./identity.js')

describe('my identity function', () => {
  test('takes and returns same number', () => {
    expect(identity(2)).toBe(2)
  })

  test('takes and returns same object', () => {
    const obj = { a: 1 }
    expect(identity(obj)).toEqual(obj)
  })
})
