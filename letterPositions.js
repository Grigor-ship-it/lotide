const assertArraysEqual = require("./assertArraysEqual");

const letterPositions = function(sentence) {
  const results = {};
  for (let x = 0; x < sentence.length; x++) {
    const position = sentence[x];
    if (position === " ") {

    } else if (!results[position]) {
      results[position] = [x];
    } else {
      results[position].push(x);
    }
  }

  console.log(results);
  return results;
};




letterPositions("lighthouse in the house");
assertArraysEqual(letterPositions("hello").e, [1]);

module.exports = letterPositions;