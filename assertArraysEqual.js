const eqArrays = require('../lotide/eqArrays');

const assertArraysEqual = function(actual, expected) {
  let happyEmoji = String.fromCodePoint(0x1F91D);
  let angryEmoji = String.fromCodePoint(0x1F621);
  if (eqArrays(actual, expected)) {
    console.log(`${happyEmoji} Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`${angryEmoji} Assertion Failed: [${actual}] !== [${expected}]`);
}};

module.exports = assertArraysEqual;



