/**
 * List types:
 *  - SINGLY LINKED LIST
 *  - DOUBLE LINKED LIST
 *  - CIRCULAR LINKED LIST
 * Operations: (HINT: this is STACK )
 *    setHead  Time O(1) | Space O(1)
 *    setTail  Time O(1) | Space O(1)
 *    insertBefore  Time O(1) | Space O(1)
 *    insertAfter  Time O(1) | Space O(1)
 *    insertAtPosition  Time O(P) | Space O(1) => P is node position
 *    removeNodesWithValue  Time O(n) | Space O(1)
 *    remove  Time O(1) | Space O(1)
 *    containsNodeWithValue  Time O(n) | Space O(1)
 */

//Implementation of Double linked list

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  setHead(node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.insertBefore(this.head, node);
  }
  setTail(node) {
    if (!this.tail) {
      this.setHead(node);
      return;
    }
    this.insertAfter(this.tail, node);
  }
  insertAtPosition(position, nodeToInsert) {
    if (position === 0) {
      this.setHead(nodeToInsert);
      return;
    }
    let currentNode = this.head.next;
    let currentPosition = 1;
    while (currentNode && position !== currentPosition) {
      currentNode = currentNode.next;
      currentPosition++;
    }
    if (currentNode) {
      this.insertBefore(currentNode, nodeToInsert);
    } else {
      this.setTail(nodeToInsert);
    }
  }
  insertBefore(node, nodeToInsert) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);
    nodeToInsert.prev = node.prev;
    nodeToInsert.next = node;
    if (!node.prev) {
      this.head = nodeToInsert;
    } else {
      node.prev.next = nodeToInsert;
    }
    node.prev = nodeToInsert;
  }
  insertAfter(node, nodeToInsert) {
    if (nodeToInsert == this.head && nodeToInsert == this.tail) return;
    this.remove(nodeToInsert);
    nodeToInsert.next = node.next;
    nodeToInsert.prev = node;
    if (!node.next) {
      this.tail = nodeToInsert;
    } else {
      node.next.prev = nodeToInsert;
    }
    node.next = nodeToInsert;
  }
  removeNodesWithValue(value) {
    let currentNode = this.head;
    while (currentNode) {
      let nodeToRemove = currentNode;
      currentNode = currentNode.next;
      if (currentNode.value === value) {
        this.remove(nodeToRemove);
      }
    }
  }
  containsNodeWithValue(value) {
    let currentNode = this.head;
    while (currentNode && currentNode.value !== value) {
      currentNode = currentNode.next;
    }
    return currentNode !== null;
  }
  remove(node) {
    if (node === this.head) {
      this.head = node.next;
    }
    if (node === this.tail) {
      this.tail = node.prev;
    }
    this.removeNodeBindings(node);
  }
  removeNodeBindings(node) {
    if (node.next) {
      node.next.prev = node.prev;
    }
    if (node.prev) {
      node.prev.next = node.next;
    }
    node.prev = null;
    node.next = null;
  }
}

const testList = new DoubleLinkedList();
const item1 = new ListNode("one");
const item2 = new ListNode("two");
const item3 = new ListNode("three");
const item4 = new ListNode("four");
const item5 = new ListNode("tfive");
const item6 = new ListNode("six");

//Test

testList.setHead(item3);
testList.setTail(item2);
testList.insertAtPosition(5, item6);

console.log(testList);
console.log(testList.containsNodeWithValue("three"));
