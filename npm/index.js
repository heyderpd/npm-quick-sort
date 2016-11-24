"use strict";

/*!
 * quick-sort
 * Copyright (c) 2016 heyderpd <heyderpd@gmail.com>
 * MIT Licensed
 */

var quicksort = function quicksort(array, lo, hi) {
  if (lo < hi) {
    var p = partition(array, lo, hi);
    quicksort(array, lo, p - 1);
    quicksort(array, p + 1, hi);
  }
};

var partition = function partition(array, lo, hi) {
  var pivot = array[hi];
  var i = lo;
  for (var j = lo; j <= hi - 1; j++) {
    if (array[j] <= pivot) {
      swapPosition(array, i, j);
      i += 1;
    }
    iterations += 1;
  }
  swapPosition(array, i, hi);
  return i;
};

var swapPosition = function swapPosition(array, i, j) {
  if (i !== j) {
    var change = array[i];
    array[i] = array[j];
    array[j] = change;
    iterations += 1;
  }
};

var main = function main(array) {
  var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (array.length === undefined || array.length <= 1) {
    return array;
  }
  var last = array.length - 1;
  var crono = void 0;
  if (debug) {
    crono = +new Date();
    iterations = 0;
  }
  quicksort(array, 0, last);
  if (debug) {
    crono = (+new Date() - crono) / 1000;
    console.log("ALL iteration's: " + iterations + " in " + crono + " ms.");
  }
  return array;
};

var array = void 0,
    iterations = void 0;

module.exports = main;
