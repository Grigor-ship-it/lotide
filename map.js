const array = ["ground", "control", "to", "major", "tom"];
const callback = word => word[0];
const assertArraysEqual = require('./assertArraysEqual');

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

assertArraysEqual(map(array, callback), ["g", "c", "t", "m", "t"]);

module.exports = map;