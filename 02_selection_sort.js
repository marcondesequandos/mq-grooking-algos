"use strict";

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

/**
 * Finds the index of the element with the smallest value in the array
 * @param {Array} array Source array
 * @returns {number} Index of the element with the smallest value
 */
function findSmallestIndex(array) {
  // encontra menor elemento
  // pega menor elemento em pos 0 do array, inicia index menor como 0

  var smallestElement = array[0]; // Stores the smallest value
  var smallestIndex = 0; // Stores the index of the smallest value
  console.log("smallest element starts with", smallestElement);

  for (var i = 1; i < array.length; i++) {
    // já que smallest começa com pos 0 então o loop for inicia i com 1, enquanto for menor q o tamanho do array incrementa esse 1,

    console.log(
      "is array[i] < smallest element",
      array[i] < smallestElement,
      "array[i] is now",
      array[i],
      "and i is",
      i,
      "and smallest element is now ",
      smallestElement,
      "smallest index is now",
      smallestIndex
    );
    if (array[i] < smallestElement) {
      // se pos i do array for menor do q o menor elemento atual a pos i atual do array vira o novo menor elemento e o menor index vira o atual i
      smallestElement = array[i];
      smallestIndex = i;
      console.log("smalest element is now", smallestElement);
    }
  }
  console.log("smalest element is finally", smallestElement);

  return smallestIndex;
}

/**
 * Sort array by increment
 * @param {Array} array Source array
 * @returns {Array} New sorted array
 */
function selectionSort(array) {
  var sortedArray = [];
  var copyArray = array.slice();
  var length = array.length;

  // inicia um array vazio
  // copia array passado
  // determina tamanho array

  for (var i = 0; i < length; i++) {
    // Finds the smallest element in the array

    // inicia smallest index que determina o menor index q inicia sempre em 0
    var smallestIndex = findSmallestIndex(copyArray);

    console.log(
      "smallestIndexSelSort is",
      smallestIndex,
      "copy array is now",
      copyArray,
      "sortedarray is now",
      sortedArray,
      "pushed element is now",
      copyArray[smallestIndex]
    );
    // pega o sortedArray q inicia vazio e vai retirando de acordo com o smallestIndex achado um elemento do copy array e colocando por último (push) no sorted array
    sortedArray.push(copyArray.splice(smallestIndex, 1)[0]);
  }

  return sortedArray;
}

const sourceArray = [5, 3, 6, 2, 10];
const sourtedArray = selectionSort(sourceArray);

console.log("Source array - ", sourceArray); // [5, 3, 6, 2, 10]
console.log("New sorted array - ", sourtedArray); // [2, 3, 5, 6, 10]
