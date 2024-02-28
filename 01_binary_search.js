"use strict";

/**
 * Searches recursively number from the list
 * @param {Array} list Source array
 * @param {number} item Search item
 * @returns {(number|null)} Number if the value is found or NULL otherwise
 */
function binary_search(list, item) {
  let low = 0;
  let high = list.length - 1;

  // enquanto low menor igual high
  // se guess igual item retornar meio da lista informada
  // se guess maior que item high agora é igual a meio menos 1 até meio ser igual a posição do item ou null
  // se guess menor que item low agora é meio + 1 até meio ser igual a posição do item ou null

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = list[mid];

    console.log(
      "item called is",
      item,
      "high is",
      high,
      "low is",
      low,
      "mid is",
      mid
    );
    if (guess === item) {
      console.log("mid now is", mid);
      return mid;
    } else if (guess > item) {
      console.log("guess is", guess, "new high", mid, "minus 1");
      high = mid - 1;
      console.log("high now is", high);
    } else {
      console.log("guess is", guess, "new low", mid, "plus 1");
      low = mid + 1;
      console.log("low now is", low);
    }
  }

  return null;
}

const my_list = [1, 3, 5, 7, 9];

console.log(binary_search(my_list, 3)); // 1
console.log(binary_search(my_list, 5)); // 2
console.log(binary_search(my_list, 9)); // 4
console.log(binary_search(my_list, 7)); // 3
console.log(binary_search(my_list, 11)); // null
console.log(binary_search(my_list, -1)); // null
