class Node {
  next: Node | null = null;

  constructor(public data: number) {}
}

export class LinkedList {
  head: Node | null = null;

  // add a node to the end of the LinkedList
  add(data: number): void {
    // create a node
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }
    // get to the end...
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node; // add the node you just created to the end
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let length = 1;
    let node = this.head;
    while (node.next) {
      length++;
      node = node.next;
    }

    return length;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error("Index out of bounds");
    }

    let counter = 0;
    let node: Node | null = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }

    throw new Error("Index out of bounds");
  }
}
