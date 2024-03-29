"use strict";

/**
 * Quick array sorting
 * @param {Array} array Source array
 * @returns {Array} Sorted array
 */
function quicksort(array) {
  // base case, arrays with 0 or 1 element are already "sorted"
  if (array.length < 2) return array;
  // recursive case
  let pivot = array[0];
  // sub-array of all the elements less than the pivot
  console.log("pivot", pivot);
  let less = array.slice(1).filter(function (el) {
    return el <= pivot;
  });
  console.log("less", less);
  // sub-array of all the elements greater than the pivot
  let greater = array.slice(1).filter(function (el) {
    return el > pivot;
  });
  console.log("greater", greater);
  return quicksort(less).concat(pivot, quicksort(greater));
}

const testArray = [10, 5, 2, 3];

console.log("quicksort na mão", quicksort([10, 5, 2, 3]));

console.log(
  "array.sort",
  testArray.sort(function (a, b) {
    return a - b;
  })
);
