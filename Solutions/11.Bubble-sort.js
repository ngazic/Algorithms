/*
  Example:
    1. [8, 5, 2, 4, 0] =>sorted: FALSE
    2. [5, 2, 4, 0, 8] =>sorted: FALSE
    3. [2, 4, 0, 5, 8] =>sorted: FALSE
    4. [2, 0, 4, 5, 8] =>sorted: FALSE
    5. [0, 2, 4, 5, 8] =>sorted: FALSE
    6. [0, 2, 4, 5, 8] =>sorted: TRUE (final check)
*/

// O(n**2) Time | O(1) Space

function bubbleSort(arr) {
  let isArraySorted = false;
  let counter = 0;
  while (!isArraySorted) {
    isArraySorted = true;
    for (let i = 0; i < arr.length - 1 - counter; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(i, i + 1, arr);
        isArraySorted = false;
      }
    }
    counter++;
  }
}

function swap(i, j, arr) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

// Test

const testArray = [
  -1,
  20,
  4,
  0,
  10,
  -3
];

bubbleSort(testArray);
console.log(testArray);