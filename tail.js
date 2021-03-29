const assertEqual = function(actual, expected) {
  let happyEmoji = String.fromCodePoint(0x1F91D);
  let angryEmoji = String.fromCodePoint(0x1F621);
  if (actual.length === expected.length) {
    for (let x = 0; x < actual.length; x++) {
      if (actual[x] === expected[x]) {
    
  
    console.log(`${happyEmoji} Assertion Passed: [${actual}] === [${expected}]`);
  } else console.log(`${angryEmoji} Assertion Failed: [${actual}] !== [${expected}]`);
  }}};

const tail = function(actual) {
  let newArray = [];
  for (let x = 1; x < actual.length; x++) {
    newArray.push(actual[x])
    
  } 
  return newArray;
}


const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); 
assertEqual(words.length, 3); 