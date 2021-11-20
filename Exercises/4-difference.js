'use strict';

// Find difference of two arrays
// elements from array1 that are not includes in array2

const removeElement = (array, item) => {
    const index = array.indexOf (item);
    if (index !== -1) array.splice (index,1);
  };

const difference = (array1, array2) => {
    const array0 = array1;
    for (const item of array2) {
        removeElement (array0, item);
    };
    return array0;
};

module.exports = { difference };
