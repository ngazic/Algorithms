/**
 * River Sizes
You're given a two-dimensional array (a matrix) of potentially unequal height and width containing only 0s and 1s. Each 0 represents land, and each 1 represents part of a river. A river consists of any number of 1s that are either horizontally or vertically adjacent (but not diagonally adjacent). The number of adjacent 1s forming a river determine its size.

Note that a river can twist. In other words, it doesn't have to be a straight vertical line or a straight horizontal line; it can be L-shaped, for example.

Write a function that returns an array of the sizes of all rivers represented in the input matrix. The sizes don't need to be in any particular order.

input:
matrix = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0],
]

Output:
[1, 2, 2, 2, 5] // The numbers could be ordered differently.

// The rivers can be clearly seen here:
// [
//   [1,  ,  , 1,  ],
//   [1,  , 1,  ,  ],
//   [ ,  , 1,  , 1],
//   [1,  , 1,  , 1],
//   [1,  , 1, 1,  ],
// ]
 */

function riverSizes(matrix) {
  const traversalMatrix = [...Array(matrix.length)].map(() => Array(matrix[0].length).fill(false));
  const solution = [0];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (traversalMatrix[i][j]) {
        continue;
      }
      if (solution[solution.length - 1] !== 0) 
        solution.push(0);
      followRivers(matrix, traversalMatrix, solution, i, j);
    }
  }
  console.table(traversalMatrix);
  console.table(solution);
}

function followRivers(input, helper, solution, i = 0, j = 0) {
  if (i >= helper.length || i < 0) 
    return 0;
  if (j >= helper[0].length || j < 0) 
    return 0;
  if (helper[i][j]) 
    return 0;
  helper[i][j] = true;
  if (input[i][j] === 1) {
    solution[solution.length - 1]++;
    followRivers(input, helper, solution, i, j + 1);
    followRivers(input, helper, solution, i, j - 1);
    followRivers(input, helper, solution, i + 1, j);
    followRivers(input, helper, solution, i - 1, j);
  } else {
    return;
  }
}

//Test

const matrix = [
  [
    1, 0, 0, 1, 0
  ],
  [
    1, 0, 1, 0, 0
  ],
  [
    0, 0, 1, 0, 1
  ],
  [
    1, 0, 1, 0, 1
  ],
  [
    1, 0, 1, 1, 0
  ]
];

riverSizes(matrix);
