export class NumbersCollection {
  constructor(public data: number[]) {}

  // get: lets (forces) me do new NumbersCollection([1,2,3]).length
  // instead of new NumbersCollection([1,2,3]).length()
  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}
