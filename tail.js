const tail = function(actual) {
  let newArray = [];
  for (let x = 1; x < actual.length; x++) {
    newArray.push(actual[x]);
    
  }
  return newArray;
};

module.exports = tail;