/**
 *Example:
    1. [8, 5, 2, 9, 0]
    2. [5, 8, 2, 9, 0]
       [5, 2, 8, 9, 0]
    3. [2, 5, 8, 9, 0]
    4. [2, 5, 8, 9, 0]
       [2, 5, 8, 0, 9]
       [2, 5, 0, 8, 9]
       [2, 0, 5, 8, 9]
    5. [0, 2, 5, 8, 9]

 */

//O(n**2) Time | O(1) Space
function insertionSort(arr) {
 for(let i = 1; i<arr.length; i++) {
   console.log(`i: ${i}`)
   for(let j=i;j>=0;j--){
     if(arr[j] > arr[j+1]) {
       swap(j, j+1, arr);
      }else {
        break;
      }
      console.log(arr)
   }
  //  console.log(arr)
  }
  console.log(arr)
}

// OTHER WAY OF WRITTING CODE USING WHILE LOOP:
//O(n**2) Time | O(1) Space
function insertionSort2(arr) {
 for(let i = 1; i<arr.length; i++) {
   console.log(`i: ${i}`)
   let j = i;
  while(j>0 && arr[j] < arr[j-1]) {
    swap(j,j-1, arr);
    j--;
  }
  //  console.log(arr)
  }
  console.log(arr)
}

function swap(i, j, arr) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

// Test

const testArray = [-1, 20, 4, 0, 10, -3];
const testArray2 = [100, 90, 80, 70, 60, 0];

insertionSort2(testArray);
// console.log(testArray);
