const assertEqual = function(actual, expected) {
  let happyEmoji = String.fromCodePoint(0x1F91D);
  let angryEmoji = String.fromCodePoint(0x1F621);
  if (actual === expected) {
    console.log(`${happyEmoji} Assertion Passed: [${actual}] === [${expected}]`);
  } else console.log(`${angryEmoji} Assertion Failed: [${actual}] !== [${expected}]`);
};

const countLetters = function(string) {
  let output = {};
  
  for (let x = 0; x < string.length; x++) {
    const word = string[x]; {
     
      if (!output[word]) {
        output[word] = 1;
       
      } else {
        output[word] = output[word] + 1;
      }
    }
  } console.log(output) 
  return output
} 


countLetters("lighthouse in the house");