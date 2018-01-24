// check when fn(a)(b)(c)(d) throws an error
// check for all combinations of arguments to curried function
const curry = require('./curry_function.js')

describe('return type check', () => {
  const fn = (a, b, c) => a + b + c
  test('should return a function', () => {
    expect(typeof curry(fn)).toBe('function')
  })

  test('should return a function', () => {
    expect(typeof curry(fn)(1)).toBe('function')
  })

  test('should return a function', () => {
    expect(typeof curry(fn)(1)(2)).toBe('function')
  })

  test('should return a number', () => {
    expect(typeof curry(fn)(1)(2)(3)).toBe('number')
  })
})
