// requided's

const assert = require('assert')

// const quickSort = require('../src/main')
const quickSort = require('../npm/index')

const tendentious = require('random-tendentious')
const randTo100 = () => (Math.floor( tendentious({l: [10, 100]})() ))
const getArray = (lim = 1) => {
  let array = []
  while (lim--) {
    array.push( randTo100() )
  }
  return array
}

const tryHeap = lim => {
  let array = getArray(lim)
  console.log('==> itens:', array.length)
  quickSort(array, true)
}

// let trys = 0, lim = 10, step = 150
// while (trys++ < lim) {
//   tryHeap( trys * step )
// }

tryHeap( 30000 )
