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
  } console.log(output);
  return output;
};


countLetters("lighthouse in the house");

module.exports = countLetters;