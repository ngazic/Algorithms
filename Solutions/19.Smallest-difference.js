/**
 * Smallest Difference
Write a function that takes in two non-empty arrays of integers.
The function should find the pair of numbers (one from the first array, one from the second array)
whose absolute difference is closest to zero.
The function should return an array containing these two numbers,
with the number from the first array in the first position.
Assume that there will only be one pair of numbers with the smallest difference.
Sample input: [-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]
Sample output: [28, 26]
 */

/*
  Solution: sort arrays and move pointers according to differrences 

  [-1,3, 5, 10, 20, 28], [15, 17, 26,134, 135 ]
    |                      |  
    L                      R
*/


//O(nlog(n) + mlog(m)) Time | O(1) Space
 function smallestDifference(A, B) {
   A.sort((a,b) => {
     return a-b;
   });
   B.sort((a,b) => {
     return a-b;
   })
   let idxOne = 0;
   let idxTwo = 0;
   let bestFit = Infinity;
   let currentDifferrence = Infinity;
   let smallestPair = [];
   while(idxOne < A.length && idxTwo < B.length) {
     const firstNmbr = A[idxOne];
     const secondNmbr = B[idxTwo];
    if(firstNmbr < secondNmbr){
      currentDifferrence = secondNmbr - firstNmbr;
      idxOne++;
    }else if (firstNmbr > secondNmbr) {
      currentDifferrence = firstNmbr - secondNmbr;
      idxTwo++;
    }else {
      return [firstNmbr, secondNmbr];
    }

    if(bestFit > currentDifferrence) {
      bestFit = currentDifferrence;
      smallestPair = [firstNmbr, secondNmbr]
    }
   }
   return smallestPair;
 }


 //Test 

 const array1 = [-1, 5, 10, 20, 28, 3];
 const array2 = [26, 134, 135, 15, 17];

 console.log(smallestDifference(array1, array2));
 