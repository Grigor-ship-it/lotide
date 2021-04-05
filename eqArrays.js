const eqArrays = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return false;
  }
  for (let x = 0; x < firstArray.length; x++) {
    if (firstArray[x] !== secondArray[x]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;