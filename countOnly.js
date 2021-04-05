const assertEqual = require("./assertEqual");

const countOnly = function(allItems, itemsToCount) {
  const output = {};
  
  for (let x = 0; x < allItems.length; x++) {
    const item = allItems[x];
    if (itemsToCount[item]) {
      if (!output[item]) {
        output[item] = 1;
        console.log(output);
      } else {
        output[item] = output[item] + 1;
        console.log(output);
      }
    }
  } return output;
};


  

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

module.exports = countOnly;