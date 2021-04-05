const assertArraysEqual = require("./assertArraysEqual");

const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let x = 0; x < source.length; x++) {
    if (source[x] === itemsToRemove[x]) {
      newArray.push(source[x]);
    }
  } return newArray;
};

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(words, ["hello", "world"]);

module.exports = without;