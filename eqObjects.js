const eqArrays = require("./eqArrays");

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length === keys2.length) {
    
    for (let isEqual in object1) {
      if (Array.isArray(object1[isEqual]) && Array.isArray(object2[isEqual])) {
       
        let areEqual = eqArrays(object1[isEqual], object2[isEqual]);
      
        if (areEqual === false) {
          console.log("false");
          return false;
        }
      
      } else if (object1[isEqual] !== object2[isEqual]) {
        console.log("false");
        return false;
        
      }
    } console.log("true");
    return true;
  } else console.log("false");
  return false;
};

  
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

module.exports = eqObjects;