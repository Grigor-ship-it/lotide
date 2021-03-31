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

const middle = function(array) {
  let middleArray = [];
  if (array.length <= 2) {
    return console.log(middleArray)
  } else if (array.length % 2 === 0){
    let elementOne = (array.length / 2)
    let elementTwo = (array.length / 2) + 1
    middleArray.push(array[elementOne - 1])
    middleArray.push(array[elementTwo - 1])
    return console.log(middleArray)
  } else {
    let elementOne = Math.floor(array.length / 2)
    
    middleArray.push(array[elementOne])
    
    return console.log(middleArray)
  }
  }

  
  middle([1, 2])
  middle([1, 2, 3, 4, 5])
  middle([1, 2, 3, 4, 5, 6])
  middle([1, 6, 7, 345, 667, 345, -1, 2, 9])