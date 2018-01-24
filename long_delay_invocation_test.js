let accumulator = require('./long_delay_invocation.js')

describe('return type tests', () => {
  test('returns a function when called with a valid argument', () => {
    expect(typeof accumulator(2)).toBe('function')
  })

  test('returns a number when called with no argument or with undefined', () => {
    expect(typeof accumulator()).toBe('number')
  })
})

describe('return value tests', () => {
  test('test with positive numbers', () => {
    const nums = [1, 2, 3]
    accumulator.total = 0
    accumulator = nums.reduce((acc, num) => acc(num), accumulator)
    expect(accumulator()).toBe(6)
  })

  test('test with negative numbers', () => {
    const nums = [-1, -2, -3]
    accumulator.total = 0
    accumulator = nums.reduce((acc, num) => acc(num), accumulator)
    expect(accumulator()).toBe(-6)
  })

  test('test with no arguments', () => {
    accumulator.total = 0
    expect(accumulator()).toBe(0)
  })
})
