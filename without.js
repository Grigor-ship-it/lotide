const assertEqual = function(actual, expected) {
  let happyEmoji = String.fromCodePoint(0x1F91D);
  let angryEmoji = String.fromCodePoint(0x1F621);
  if (actual === expected) {
    console.log(`${happyEmoji} Assertion Passed: [${actual}] === [${expected}]`);
  } else console.log(`${angryEmoji} Assertion Failed: [${actual}] !== [${expected}]`);
};

const eqArrays = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
  return false
 } 
  for (let x = 0; x < firstArray.length; x++) {
    if (firstArray[x] !== secondArray[x]) {
       return false
     
      
   } 
 } 
 return true
}

const assertArraysEqual = function(actual, expected) {
  let happyEmoji = String.fromCodePoint(0x1F91D);
  let angryEmoji = String.fromCodePoint(0x1F621);
  if (eqArrays(actual, expected)) {
    console.log(`${happyEmoji} Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`${angryEmoji} Assertion Failed: [${actual}] !== [${expected}]`);
}};


const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let x = 0; x < source.length; x++) {
    if (source[x] === itemsToRemove[x]) {
      newArray.push(source[x]);
    }
  } return newArray
}













without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(words, ["hello", "world"]);