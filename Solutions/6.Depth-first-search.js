/**
Depth First Search (DFS) for Graph (Tree is graph, List is special case of tree)

Two ways to represent Graphs:
1. Adjacency list
2. Adjecency matrix

HINT: Create data structure that satisfies this  (i.e. directed acyclic graph because we always start searching from root
   node through child nodes /vertices)

Sample input:
             A                    
          /  |  \
        B    C   D
      /   \    /    \             
    E      F  G     H
          / \  \
        I   J    K
                

Sample output: [A, B, E, F, I, J, C, D, G, K, H]
 */

/*
object visual representation:
{
  A: [B, C, D],  ===> A is array of arrays with depth/ level/ height 3 
  B: [E, F],
  F: [I, J],
  D: [G, H],
  G: [K]
}

*/

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }
  addChild(node) {
    this.children.push(node);
    return this;
  }
  depthFirstSearch(array) {
    array.push(this.name);
    console.log(`I'm in the ${this.name}`);
    for(let child of this.children) {
      child.depthFirsSearch(array)
    }
    return array;
  }
}

const test = new Node("A");
test.addChild(new Node("B")).addChild(new Node("C")).addChild(new Node("D"));
test
console.log(test);