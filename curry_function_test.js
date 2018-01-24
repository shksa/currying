// check when fn(a)(b)(c)(d) throws an error
// check for all combinations of arguments to curried function
const curry = require('./curry_function.js')

describe('return type check', () => {
  const fn = (a, b, c) => a + b + c
  const curriedFn = curry(fn)
  test('should return a function', () => {
    expect(typeof curriedFn).toBe('function')
  })

  test('should return a function', () => {
    expect(typeof curriedFn(1)).toBe('function')
  })

  test('should return a function', () => {
    expect(typeof curriedFn(1)(2)).toBe('function')
  })

  test('should return a number', () => {
    expect(typeof curriedFn(1)(2)(3)).toBe('number')
  })
})

describe('return value checks', () => {
  const fn = (a, b, c) => a + b + c
  const curriedFn = curry(fn)
  const [arg1, arg2, arg3] = [1, 2, 3]
  const expected = fn(arg1, arg2, arg3)
  test('should return expected', () => {
    expect(curriedFn(arg1)(arg2)(arg3)).toBe(expected)
  })

  test('should return expected', () => {
    expect(curriedFn(arg1)(arg2, arg3)).toBe(expected)
  })

  test('should return expected', () => {
    expect(curriedFn(arg1, arg2)(arg3)).toBe(expected)
  })
})
