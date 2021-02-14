import { NumbersCollection } from "./NumbersCollection";
// class Sorter {
//   collection: number[];

//   constructor(collection: number[]) {
//     this.collection = collection;
//   }
// }

// interfaces not needed if you use abstract classes in this example

// compare and contrast
/*
Interfaces: 
- Sets up a contract betweeen different classes
- Use when we have very different objects that we want to work together
- Promotes loose coupling
- When working with very dissimilar objects (Company and User) more appropriate
- Company and User don't really have a Parent class should they...
- Always reach for Interfaces first
- unless Classes are very closely related to each other

Inheritance / Abstract Classes
- Sets up a contract between different classes
- Use when we are trying to build up a definition of an object
- Strongly couples classes togehter
- A Sorter class has a lot to do with collection of data
- Let's give all data structure a sorting method

*/

interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean; // interface names don't have to match up
  swap(leftIndex: number, rightIndex: number): void;
}

// EQUIVALENT TO ABOVE:

// make Sorter an abstract class
// Abstract Classes
/*
- Can't be used to create an object directly
- Only used as a parent class
- Can contain real implementation for some methods
- The implemented methods can refer to other methods that don't actually exist yet 
  (we still have to provide names and types for the un-implemented moethods)
    in this case compare and swap and length
  - Can make child classes promise to implement some other method
    i.e. compare and swap will eventually exist in its child class instances
*/
export abstract class Sorter {
  // goal with inheritance: make this.collection.compare be just this.compare
  // we will eventually have methods for length, compare, swap
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sort(): void {
    const { length } = this;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
