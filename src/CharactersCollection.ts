export class CharactersCollection {
  constructor(public data: string) {}

  // get: lets (forces) me do new CharactersCollection([1,2,3]).length
  // instead of new CharactersCollection([1,2,3]).length()
  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    // leftIndex: 1, rightIndex, 2
    // this.data = 'acbd'
    const characters = this.data.split(""); // ['a', 'c', 'b', 'd']
    const leftHand = characters[leftIndex]; // 'c'
    characters[leftIndex] = characters[rightIndex]; // ['a', 'b', 'b', 'd']
    characters[rightIndex] = leftHand; // ['a', 'b', 'c', 'd']

    this.data = characters.join(""); // this.data = 'abcd'
  }
}
