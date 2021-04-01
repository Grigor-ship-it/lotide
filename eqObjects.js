const assertEqual = function(actual, expected) {
  let happyEmoji = String.fromCodePoint(0x1F91D);
  let angryEmoji = String.fromCodePoint(0x1F621);
  if (actual === expected) {
    console.log(`${happyEmoji} Assertion Passed: [${actual}] === [${expected}]`);
  } else console.log(`${angryEmoji} Assertion Failed: [${actual}] !== [${expected}]`);
};



const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length === keys2.length) {
    
    for (let isEqual in object1) {
      if (Array.isArray(object1[isEqual]) && Array.isArray(object2[isEqual])) {
       
       let areEqual = eqArrays(object1[isEqual], object2[isEqual]) 
      
       if (areEqual === false) {
       console.log("false")
       return false
      }} 
      else if (object1[isEqual] !== object2[isEqual]){
        console.log("false")
        return false
        
      } 
    } console.log("true") 
    return true
  } else console.log("false")
    return false
}

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
 






const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
