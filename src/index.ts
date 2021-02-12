// tsc index.ts ==> index.js

//  tsc --init  ==> tsconfig.json

// change rootDir and outDir

// tsc -w /* watch the src directory and spit out compiled version into build */

// node build/index.js
// npm install nodemon concurrently
// nodemon: is going to allow us to rerun node anytime a file changes inside of our project.
// so nodemon is going to be resp for executing our code once it has been compiled.
// concurrently: help us run multiple scripts at the same time; in particular, run script to start up typescript compiler,
// #2 to run nodemon to execute that code

/*
  "scripts": {
    "start:build": "tsc -w",
    "start:run": "nodemon build/index.js",
    "start": "concurrently npm:start:*"
  },

  start:build ==> watches rootDir in tsconfig.json "./src"; anytime there's a change, converts it to .js files inside outDir "./build"
  start:run ==> anytime there is a change in build/index.js, it's going to execude node index.js
  start: concurrently fires anything that has start:whatever
*/

// class Sorter {
//   collection: number[];

//   constructor(collection: number[]) {
//     this.collection = collection;
//   }
// }

// EQUIVALENT TO ABOVE:
class Sorter {
  constructor(public collection: number[] | string) {}

  sort(): void {
    const { length } = this.collection;
    // All of this only works if collection is number[]
    // If collection is an array of numbers
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // Type Guard for Arrays
        if (this.collection instanceof Array) {
          // TS now knows inside this block, this.collection is an Array
          // suggests more Array methods
          if (this.collection[j] > this.collection[j + 1]) {
            const leftHand = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = leftHand;
          }
        }
        // Type Guard for Strings
        if (typeof this.collection === "string") {
          // TS now knows inside this block, this.collection is a string
          // suggests more string methods
        }
      }
    }

    // Only going to work if collection is a string
    // If a collection is a string, do this logic instead:
    //
  }
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
