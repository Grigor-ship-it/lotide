const assertEqual = function(actual, expected) {
  let happyEmoji = String.fromCodePoint(0x1F91D);
  let angryEmoji = String.fromCodePoint(0x1F621);
  if (actual === expected) {
    console.log(happyEmoji + " Assertion Passed: [" + actual + "] === [" + expected + "]");
  } else console.log(angryEmoji + " Assertion Failed: [" + actual + "] !== [" + expected + "]");
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(2,5);