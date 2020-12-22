/**
 * Find Closest Value In BST

You are given a BST data structure consisting of BST nodes.
Each BST node has an integer value stored in a property called "value" and
two children nodes stored in properties called "left" and "right," respectively.

A node is said to be a BST node if and only if it satisfies the BST property:
its value is strictly greater than the values of every node to its left;
its value is less than or equal to the values of every node to its right;
and both of its children nodes are either BST nodes themselves or None (null) values.
You are also given a target integer value;
write a function that finds the closest value to that target value contained in the BST.

Assume that there will only be one closest value.

Sample input:
             10           , 12
          /      \
        5        15
      /   \    /    \
    2      5  13     22
  /             \
 1               14

Sample output: 13
 */

/**
 * ========================
 * Solution 1
 */

///Averege: Time O(log(n)) | Space O(log(n)) => n is the number of nodes
///Worst: Time O(n) | Space O(n) => n is the number of nodes

function closestValueInBST1(tree, targetValue) {
  return findClosestValueInBST(tree, targetValue, Infinity);
}

function findClosestValueInBST(node, targetValue, bestMatch) {
  if (!node) {
    return bestMatch;
  } else if (
    Math.abs(node.value - targetValue) < Math.abs(targetValue - bestMatch)
    ) {
      bestMatch = node.value;
    }
    if (node.value > targetValue) {
      return findClosestValueInBST(node.left, targetValue, bestMatch);
    } else if (node.value < targetValue) {
      return findClosestValueInBST(node.right, targetValue, bestMatch);
    } else return bestMatch;
  }
  
  /**
   * ========================
   * Solution 2
   */

///Averege: Time O(log(n)) | Space O(1) => n is the number of nodes
///Worst: Time O(log(n)) | Space O(1) => n is the number of nodes

  function closestValueInBST2(tree, targetValue) {
    let currentNode = tree;
    let closest = tree.value;
    while (currentNode) {
      if(Math.abs(currentNode.value - targetValue) < Math.abs(closest - targetValue)) {
        closest = currentNode.value;
      }
      if(currentNode.value < targetValue){
        currentNode = currentNode.right;
      }else if(currentNode.value > targetValue) {
        currentNode = currentNode.left;
      }else {
        return currentNode.value;
      }

    }
    return closest;

  }



  //Test
  
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
    this.right = null;
  }
}

const myTree = new BinaryTree(10);
const node1 = new BinaryTree(5);
const node2 = new BinaryTree(15);
const node3 = new BinaryTree(2);
const node4 = new BinaryTree(5);
const node5 = new BinaryTree(13);
const node6 = new BinaryTree(22);
const node7 = new BinaryTree(1);
const node8 = new BinaryTree(14);
const node9 = new BinaryTree(1);
const node10 = new BinaryTree(4);

myTree.left = node1;
myTree.right = node2;
node1.left = node3;
node1.right = node4;
node2.left = node5;
node2.right = node6;
node3.left = node7;
node4.left = node9;
node4.right = node10;
node5.right = node8;

console.log("Closest Value in BST is: " + closestValueInBST2(myTree, 12));
