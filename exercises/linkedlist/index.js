// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    const currentHead = this.head;
    const newNode = new Node(data, currentHead);
    this.head = newNode;

    // can be refactored to 1 line
    // this.head = new Node(data, this.head)
  }
  size() {
    let counter = 0;
    let current = this.head;
    while (current) {
      counter++;
      current = current.next;
    }
    return counter;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    if (!this.head) return null;
    let current = this.head;
    while (current) {
      if (!current.next) return current;
      current = current.next;
    }
  }
  clear() {
    this.head = null;
  }
  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }
  removeLast() {
    if (!this.head) {
      return;
    }
    // if (this.size() === 1) { or code below is better alternative
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let prevNode = this.head;
    let currNode = this.head.next;
    while (currNode.next) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    prevNode.next = null;
  }
  insertLast(val) {
    let newNode = new Node(val);
    if (!this.head) {
      return (this.head = newNode);
    }
    const lastNode = this.getLast();
    lastNode.next = newNode;

    // Alt solution
    // const lastNode = this.getLast();
    // if (lastNode) {
    //   lastNode.next = new Node(val);
    // } else {
    //   this.head = new Node(val);
    // }
  }
  getAt(idx) {
    // if (!this.head) {
    //   return null;
    // } <- not necessary because if empy, will exit while loop and hit null

    let counter = 0;
    let current = this.head;
    while (current) {
      if (counter === idx) {
        return current;
      }
      counter++;
      current = current.next;
    }
    return null;
  }
  removeAt(idx) {
    // edge - empty list
    if (!this.head) {
      return;
    }
    // edge - remove head or when only 1 item
    if (idx === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(idx - 1);

    // edge - check for out of bounds
    if (!previous || !previous.next) {
      return;
    }

    // can delete at a given idx
    previous.next = previous.next.next;
  }
  insertAt(val, idx) {
    // edge - insert into empty list
    if (!this.head) {
      this.head = new Node(val);
    }

    // insert at head
    if (idx === 0) {
      this.head = new Node(val, this.head);
      return;
    }

    // insert in middle ( || this.getLast() handles out of bounds)
    const previous = this.getAt(idx - 1) || this.getLast();
    const newNode = new Node(val, previous.next);
    previous.next = newNode;
  }
  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  //generator - allows a for..of helper
  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
