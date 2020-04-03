// function declaration
// A function declaration is a statement that describe what your code does.
// Declarations are hoisted, which means they are loaded at the top of the scope before any other code runs.

//function declaration
makeBread(5);
function makeBread(qty) {
  return "I am bread ".repeat(qty);
}

//function expression
const makeBeer = function(qty) {
  return "I am beer ".repeat(qty);
};
console.log(makeBeer(5));

//a function expression assigned in a variable
const makeDish = function beerFun(qty) {
  return "I am a dish ".repeat(qty);
};
console.log(makeDish(3));

// parameters and arguments

// Positional
function makeBreakfast(main, side, drink) {
  console.log(arguments);
  return `Breakfast is ${main}, ${side}, and ${drink}.`;
}
console.log(makeBreakfast("pancake", "juice"));

// Named
function makeLunch(opts) {
  console.log(arguments);
  const { main, side, drink } = opts;
  return `Lunch is ${main}, ${side}, and ${drink}.`;
}
console.log(makeLunch({ main: "pancake", side: "bacon", drink: "juice" }));

// Rest params
function makeDinner(main, ...args) {
  console.log(main, args);
  return `Dinner includes ${main} and ${args.join(", ")}.`;
}
console.log(makeDinner("pancake", "bacon", "juice", "pasta", "salmon"));

//Arrow Functions
//Arrow functions provide syntatic sugar for writing compact code,
// while also omitting a new this object, which solves common pain points when writing object-oriented code.
// An arrow function is unique because it:
// Does not have its own this object.
// Implicit return value when brackets are omitted. i.e. () => true returns true.
// Always an expression, never a statement.

//Arrow functions
const makeParty = qty => `Let's party!  \n`.repeat(qty);
console.log(makeParty(30));

// A higher order function is created by combining (or composing) multiple functions together by passing
// (1) functions as arguments or
// (2) returning functions.
// There are many built-in JS functions that use HOF, for example setTimeout and Array.map.

// Anonymous
setTimeout(() => console.log("hello!"), 2000);

// Named
const log = () => console.log("hello");
setTimeout(log, 2000);

// Array Map
const x = [1, 2, 3, 4].map(v => v ** 2);
console.log(x);

// Recursive function
// A recursive function is one that calls itself from inside its own function body.
// If a terminating condition is not provided it will create and infinite loop.
// Recursive functions are commonly used in algorithm implementations to efficiently handle tasks like binary-tree traversal.
// Below is an example of a recursive function that traverses the the file system using NodeJS.

// require() needs nodejs
// const fs = require("fs");
// const { join } = require("path");

// const traverse = dir => {
//   const subfolders = fs.statSync(dir).isDirectory() && fs.readdirSync(dir);

//   if (subfolders) {
//     console.log("👟👟👟 Traversing ", dir);

//     subfolders.forEach(path => {
//       const fullPath = join(dir, path);

//       traverse(fullPath);
//     });
//   }
// };

// traverse(process.cwd());
