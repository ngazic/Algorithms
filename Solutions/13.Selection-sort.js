/**
 *   Example:
    1. [8, 5, 2, 4, 0]
    2. [0, 5, 2, 4, 8]
    3. [0, 2, 5, 4, 8]
    4. [0, 2, 4, 5, 8]
    5. [0, 2, 4, 5, 8]
 */

//O(n**2) Time | O(1) Space
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let temp = i;
    let j = i+1;
    while (j < arr.length) {
      if (arr[j] < arr[i]) {
        temp = j;
      }
      j++;
    }
    swap(i, temp, arr);
    console.log(arr);
  }
  console.log(arr);
}

function swap(i, j, arr) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

// Test

const testArray = [-1, 20, 4, 0, 10, -3];

selectionSort(testArray);
console.log("hello world");
