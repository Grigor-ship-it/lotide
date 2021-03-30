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


// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(2,5);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
assertEqual(eqArrays([1, 2, 3, 5], [1, 2, 3, 7]), true); 
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), true); 
