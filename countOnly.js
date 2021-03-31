const assertEqual = function(actual, expected) {
  let happyEmoji = String.fromCodePoint(0x1F91D);
  let angryEmoji = String.fromCodePoint(0x1F621);
  if (actual === expected) {
    console.log(`${happyEmoji} Assertion Passed: [${actual}] === [${expected}]`);
  } else console.log(`${angryEmoji} Assertion Failed: [${actual}] !== [${expected}]`);
};

const countOnly = function(allItems, itemsToCount) {
  const output = {};
  
  for (let x = 0; x < allItems.length; x++) {
    const item = allItems[x];
     if (itemsToCount[item]) {
       if (!output[item]) {
         output[item] = 1;
         console.log(output)
       } else {
         output[item] = output[item] + 1
         console.log(output);
       }
     } 
  } return output
  
  /*const output = {};
  
  for (let checker in itemsToCount) {
    if (itemsToCount[checker] === true) {
      for (let x = 0; x < allItems.length; x++) {
       if (checker === allItems[x]) {
        if (output[checker]) {
          
        } else {
          output[checker] = 1
        }
    } }}return common
} */} 


  

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1); 
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined); 