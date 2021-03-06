// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  add(record) {
    this.first.push(record);
  }
  remove() {
    // loop thru add to 2nd Stack
    while (this.first.peek()) {
      const record = this.first.pop();
      this.second.push(record);
    }
    // pop 2nd stack
    const record = this.second.pop();

    // return remaining back to 1st stack
    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return record;
  }
  peek() {
    // loop thru add to 2nd Stack
    while (this.first.peek()) {
      const record = this.first.pop();
      this.second.push(record);
    }
    // peek 2nd stack
    const record = this.second.peek();

    // return back to 1st stack
    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return record;
  }
}

module.exports = Queue;
