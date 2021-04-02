const array = ["ground", "control", "to", "major", "tom"];
const callback = word => word[0]

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

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




assertArraysEqual(map(array, callback), ["g", "c", "t", "m", "t"])