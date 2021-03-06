// tsc index.ts ==> index.js

// tsc --init  ==> tsconfig.json

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

// import { Sorter } from "./Sorter"; // no longer needed from abstract collectioning
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

// const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

// const charactersCollection = new CharactersCollection("ZvWRXwe");
// const sorter = new Sorter(charactersCollection);
// sorter.sort();
// console.log(charactersCollection.data);

// const sorter = new Sorter(linkedList);
// sorter.sort();
// linkedList.print();

// after abstract class'ing it up
const numbersCollection = new NumbersCollection([50, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("Xaayb");
charactersCollection.sort();
console.log(charactersCollection);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
linkedList.print();
