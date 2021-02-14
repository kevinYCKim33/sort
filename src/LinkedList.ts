import { Sorter } from "./Sorter";

class Node {
  next: Node | null = null;

  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
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

  // length is asked for in this.collection.length
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

  // at is needed for compare() and swap()
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

  // once at() implemented, it's just almost the same;
  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error("");
    }

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  // kind of cheating...
  // not actually swapping linked list nodes, but the values at each of the nodes
  // uses the at() method
  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }

  // doesn't really need anything for sorting linked list; it's just there more for as a check;
  print(): void {
    if (!this.head) {
      return;
    }

    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}

const linkedList = new LinkedList();
