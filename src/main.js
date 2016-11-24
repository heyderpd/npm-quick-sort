
/*!
 * quick-sort
 * Copyright (c) 2016 heyderpd <heyderpd@gmail.com>
 * MIT Licensed
 */

const quicksort = (array, lo, hi) => {
  if (lo < hi) {
    const p = partition(array, lo, hi)
    quicksort(array, lo, p -1)
    quicksort(array, p +1, hi)
  }
}

const partition = (array, lo, hi) => {
  const pivot = array[hi]
  let i = lo
  for (let j = lo; j <= hi -1; j++) {
    if (array[j] <=pivot) {
      swapPosition(array, i, j)
      i += 1
    }
    iterations += 1
  }
  swapPosition(array, i, hi)
  return i
}

const swapPosition = (array, i, j) => {
  if (i !== j) {
    let change = array[i]
    array[i] = array[j]
    array[j] = change
    iterations += 1
  }
}

const main = (array, debug = false) => {
  if (array.length === undefined || array.length <= 1) {
    return array
  }
  const last = array.length -1
  let crono
  if (debug) {
    crono = +new Date()
    iterations = 0
  }
  quicksort(array, 0, last)
  if (debug) {
    crono = (+new Date() -crono) /1000
    console.log(`ALL iteration's: ${iterations} in ${crono} ms.`)
  }
  return array
}

let array, iterations

module.exports = main
