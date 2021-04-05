const middle = function(array) {
  let middleArray = [];
  if (array.length <= 2) {
    return middleArray;
  } else if (array.length % 2 === 0) {
    let elementOne = (array.length / 2);
    let elementTwo = (array.length / 2) + 1;
    middleArray.push(array[elementOne - 1]);
    middleArray.push(array[elementTwo - 1]);
    return middleArray;
  } else {
    let elementOne = Math.floor(array.length / 2);
    middleArray.push(array[elementOne]);
    return middleArray;
  }
};

  
module.exports = middle;