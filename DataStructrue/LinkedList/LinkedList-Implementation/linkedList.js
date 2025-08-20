class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  remove(value) {
    if (!this.head) return;

    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
    }
  }

  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) return true;
      current = current.next;
    }
    return false;
  }

  insertAt(value, index) {
    const newNode = new Node(value);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    let prev = null;
    let i = 0;

    while (current && i < index) {
      prev = current;
      current = current.next;
      i++;
    }

    if (i === index && prev) {
      prev.next = newNode;
      newNode.next = current;
    }
  }

  printList() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.value + " -> ";
      current = current.next;
    }
    result += "null";
    console.log(result);
  }
}

module.exports = LinkedList;
