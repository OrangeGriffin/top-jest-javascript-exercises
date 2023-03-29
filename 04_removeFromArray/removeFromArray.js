const removeFromArray = function(array, removeArg) {
    
    // Loop through array. Find if a value at an index is equal to the given argument.
    // If match, remove this item from the array.
    for (i = 0; i < array.length; i++) {
        if (array[i] === removeArg) {
            array.splice(i, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
