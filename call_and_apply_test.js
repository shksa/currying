const callAndApply = require('./call_and_apply.js')

const [caller, applier] = [callAndApply.caller, callAndApply.applier]


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
