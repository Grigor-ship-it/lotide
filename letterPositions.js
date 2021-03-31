const letterPositions = function(sentence) {
  const results = {};
  for (let x = 0; x < sentence.length; x++) {
    const position = sentence[x];
    if (position === " ") {

    } else if (!results[position]) {
        results[position] = [x];
      } 
      else {
        results[position].push(x);
      }
  }

  console.log(results);
  return results;
};

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



letterPositions("lighthouse in the house");
assertArraysEqual(letterPositions("hello").e, [1]);