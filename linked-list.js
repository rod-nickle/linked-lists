class Node {
  constructor(data) {
    this.data = data;
    this.pointer = null;
  }

  delete() {
    this.data = null;
    this.pointer = null;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
  }

  traversal() {
    let currentNode = this.head;
    while (currentNode) {
        console.log(currentNode.data);
        currentNode = currentNode.pointer;
    }
  };

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return
    }
    let lastNode = this.head;
    while (lastNode.pointer) {
      lastNode = lastNode.pointer;
    }
    lastNode.pointer = newNode;
  };

  delete(data) {
    let previousNode = null;
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === data) {
        if (previousNode) {
          previousNode.pointer = currentNode.pointer;
        } else {
          this.head = currentNode.pointer;
        }
        currentNode.delete();
        return;
      }
      previousNode = currentNode;
      currentNode = currentNode.pointer;
    }
  }

  search(data) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === data) {
        return currentNode;
      }
      currentNode = currentNode.pointer;
    }
  };
}

// Instantiate a linked list object from the class.
const linkedList = new LinkedList();

console.log("*** Append 4 nodes to the linked list. ***");
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.traversal();

console.log("\n*** Can the 3rd and 5th nodes be found? ***")
foundNode = linkedList.search(3);
console.log(foundNode ? `Found: ${foundNode.data}!` : "Third Node not found!");
foundNode = linkedList.search(5);
console.log(foundNode ? `Found: ${foundNode.data}!` : "Fifth Node not found!");

console.log("\n*** Delete the 2nd node. ***")
linkedList.delete(2);
linkedList.traversal();
