# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @grigor_baltadjian/lotide`

**Require it:**

`const _ = require('@grigor_baltadjian/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* head : Reports back the first index of an entry.
* tail : Reports back an array without the first element.
* middle : Reports back the middle position in an array.
* assertArraysEqual : Will pass assertion tests on Arrays.
* assertEqual : Will pass assertion tests on numbers/booleans/string.
* assertObjectsEqual : Will pass assertion tests on objects.
* countLetters : Takes in a sentence and returns count of each letter.
* countOnly : Takes in a collection of items and returns an object with the count for each.
* eqArrays : Will check if two arrays are equal.
* eqObjects : Will check if two objects are equal.
* findKey : Scans an object based off callback parameter and returns truthy value if key is present.
* findKeyByValue : Will find key of an object with the matching value.
* letterPositions : Will take in a string and return the indices of each letter with its count.
* map : Will return a new array based off callback function.
* takeUntil : Loops through an array and returns a new one until a specific parameter has been met.
* without : Removes specific items from an array
