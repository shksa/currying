const accumulator = (arg) => {
  if (arg === undefined) { return accumulator.total }
  accumulator.total += arg
  return accumulator
}

accumulator.total = 0

module.exports = accumulator
