const add = (a, b, c) => a + b + c

const curry = (func) => {
  const arity = func.length

  const f1 = (...args1) => {
    if (args1.length >= arity) {
      return func(...args1)
    }
    const f2 = (...args2) => {
      const args3 = args1.concat(args2)
      return f1(...args3)
    }
    return f2
  }

  return f1
}

module.exports = curry
