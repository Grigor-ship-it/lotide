const assertEqual2 = require('../assertEqual2');
const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("should pass when passing [Hello, Lighthouse, Labs] as an array to match [Lighthouse,Labs]", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("should pass when passing [Yo Yo, Lighthouse, Labs] as an array to match [Lighthouse,Labs]", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]); 
  });
 });