const callAndApply = require('./call_and_apply.js')

const [caller, applier] = [callAndApply.caller, callAndApply.applier]

// add cases for checking if update method is called
// add cases for ---get this info---
describe('checking calls to call and apply', () => {
  describe('should invoke mockFunction', () => {
    test('when it is passed as an argument to caller', () => {
      const mockFunction = jest.fn()
      caller(null, mockFunction)
      expect(mockFunction.mock.calls.length).toBe(1)
    })
    test('when it is passed as an argument to applier', () => {
      const mockFunction = jest.fn()
      applier(null, mockFunction)
      expect(mockFunction.mock.calls.length).toBe(1)
    })
  })

  describe('should invoke mockFunction with the right arguments', () => {
    test('when it is passed as an argument to caller', () => {
      const mockFunction = jest.fn()
      const inputArguments = ['Sahu', 21, 'M']
      caller(null, mockFunction, ...inputArguments)

      expect(mockFunction).toHaveBeenCalledWith(...inputArguments)
    })
    test('when it is passed as an argument to applier', () => {
      const mockFunction = jest.fn()
      const inputArguments = ['Stevens', 34, 'L']
      applier(null, mockFunction, inputArguments)
      expect(mockFunction).toHaveBeenCalledWith(...inputArguments)
    })
  })
})

describe('verifying call and apply functionalities', () => {
  function update(name, age, tShirtSize) {
    this.name = name
    this.age = age
    this.tShirtSize = tShirtSize
  }

  test('testing caller', () => {
    const person = { name: 'Kishor', age: 28, tShirtSize: 'L' }
    caller(person, update, 'Sam', 2, 'XL')
    const expected = { name: 'Sam', age: 2, tShirtSize: 'XL' }
    expect(person).toEqual(expected)
  })

  test('testing applier', () => {
    const person = { name: 'Kishor', age: 28, tShirtSize: 'L' }
    applier(person, update, ['Jam', 20, 'XXL'])
    const expected = { name: 'Jam', age: 20, tShirtSize: 'XXL' }
    expect(person).toEqual(expected)
  })
})
