'use strict';

// Create and return a new array without duplicate elementsA
// Don't modify initial array

const unique = (array) => {
    const newArr = [];
    for (const item of array) {
      if (!newArr.includes(item)) {
        newArr.push(item);
      };
    };
    return newArr;
  };
  
module.exports = { unique };
