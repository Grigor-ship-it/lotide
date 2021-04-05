const assertEqual2 = function(actual, expected) {
  let happyEmoji = String.fromCodePoint(0x1F91D);
  let angryEmoji = String.fromCodePoint(0x1F621);
  if (actual.length === expected.length) {
    for (let x = 0; x < actual.length; x++) {
      if (actual[x] === expected[x]) {
    
  
    console.log(`${happyEmoji} Assertion Passed: [${actual}] === [${expected}]`);
  } else console.log(`${angryEmoji} Assertion Failed: [${actual}] !== [${expected}]`);
  }}};

  module.exports = assertEqual2;