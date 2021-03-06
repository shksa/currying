const binary = require('./binary_function.js')

describe('binary function for numeric arguments', () => {
  test('test for positive numbers', () => {
    expect(binary(2, 3)).toBe(5)
  })

  test('test for negative numbers', () => {
    expect(binary(-3, -4)).toBe(-7)
  })

  test('test for decimal numbers', () => {
    expect(binary(0.1, 0.2)).toBeCloseTo(0.3)
  })

  test('return type is number for arguments of type number', () => {
    expect(typeof binary(3, -4)).toBe('number')
  })
})

describe('binary function for string arguments', () => {
  test('concatenation of two non-empty strings', () => {
    expect(binary('a', 'b')).toBe('ab')
  })

  test('concatenation of empty strings', () => {
    expect(binary('', '')).toBe('')
  })

  test('concatenation of an empty and non empty string', () => {
    expect(binary('', 'a')).toBe('a')
  })

  test('return type is string for arguments of type string', () => {
    expect(typeof binary('a', 'b')).toBe('string')
  })
})
