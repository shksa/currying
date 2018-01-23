const adder = require('./delay_invocation.js')

describe('return type tests', () => {
  test('adder returns a function', () => {
    expect(typeof adder(2)).toBe('function')
  })

  test('The function returned will return a number', () => {
    expect(typeof adder(2)(3)).toBe('number')
  })
})

describe('return value tests', () => {
  test('test for positive numbers', () => {
    expect(adder(2)(3)).toBe(5)
  })

  test('test for negative numbers', () => {
    expect(adder(-2)(-3)).toBe(-5)
  })

  test('test for string arguments', () => {
    expect(adder('a')('b')).toBe('ab')
  })
})
