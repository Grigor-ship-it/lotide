const middle = require('../middle')
const assertArraysEqual = require('../assertArraysEqual')
const assert = require('chai').assert;

  describe("#middle", () => {
    it("should return True to assess the middle position of an array when compared to [3]", () => {
      assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
    });
    it("should return True to assess the middle position of an array when compared to [667]", () => {
      assert.deepEqual(middle([1, 6, 7, 345, 667, 345, -1, 2, 9]), [667]); 
    });
   });