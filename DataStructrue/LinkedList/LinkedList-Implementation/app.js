const LinkedList = require("./linkedList");

let list = new LinkedList();

// Adding nodes
list.add(10);
list.add(20);
list.add(30);
list.add(40);

console.log("Before deletion:");
list.printList();

// Removing a node
list.remove(20);
console.log("After deleting 20:");
list.printList();

// Checking for existence
console.log("Is 30 in the list?", list.includes(30));
console.log("Is 100 in the list?", list.includes(100));

// Inserting at a specific index
