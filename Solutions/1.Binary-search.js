// O(log(n)) time | O(log(n)) space

function binarySearchRecursion(array, searchValue) {
  let result = findIndex(0, array.length - 1);
  console.log(`RESULT IS: ${result}`);

  function findIndex(startIndex, endIndex) {
    const middle = Math.floor((startIndex + endIndex) / 2);
    if (array[middle] === searchValue) {
      return middle;
    } else if (startIndex >= endIndex) {
      return -1;
    } else if (array[middle] > searchValue) {
      return findIndex(startIndex, middle - 1);
    } else {
      return findIndex(middle + 1, endIndex);
    }
  }
}

// O(log(n)) time | O(1) space

function binarySearchOptimal(array, searchValue) {
  let result = findIndex(0, array.length - 1);
  console.log(`RESULT IS: ${result}`);

  function findIndex(startIndex, endIndex) {
    let middle;
    while (startIndex <= endIndex) {
      middle = Math.floor((startIndex + endIndex) / 2);
      if (array[middle] === searchValue) {
        return middle;
      } 
      else if (array[middle] > searchValue) {
        endIndex = middle - 1;
      } else {
        startIndex = middle + 1;
      }
    }
    return -1;
  }
}

const testArray1 = [2, 3, 4, 5, 11];


//Testing normal solution
binarySearchRecursion(testArray1, 5);
binarySearchOptimal(testArray1, 6);

// Testing on unexisting array item
binarySearchRecursion(testArray1, 1);
binarySearchOptimal(testArray1, 16);
binarySearchOptimal(testArray1, 6);