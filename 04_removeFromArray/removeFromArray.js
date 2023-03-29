const removeFromArray = function (array, removeArg) {
  const args = Array.from(arguments);

  if (args.length > 1) {
    // Confirm there are arguments to remove from array
    args.splice(0, 1); // Provide array of just the 'remove' arguments
    const toRemoveArray = args; // Assign resulting array to new array

    // Loop through each 'remove' argument
    for (i = 0; i < toRemoveArray.length; i++) {
      let removeItem = toRemoveArray[i]; //Obtain the value at each 'to remove' item
      // Loop through array. Find if a value at an index is equal to the given argument.
      // If match, remove this item from the array.
      for (j = 0; j < array.length; j++) {
        if (array[j] === removeItem) {
          array.splice(j, 1);
        }
      }
    }
    return array;
  } else {
    // If no arguments given to remove, return the original array
    return array;
  }
};

// Do not edit below this line
module.exports = removeFromArray;
