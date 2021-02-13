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
    const characters = this.data.split("");
    const leftHand = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = leftHand;

    this.data = characters.join(""); // hence you're not returning anything
  }
}
