const removeFromArray = function(array, removeArg) {
    for (i = 0; i < array.length; i++) {
        if (array[i] === removeArg) {
            array.splice(i, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
