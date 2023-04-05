const fibonacci = function(pos) {
    pos = Number(pos);
    const fibArray = [1,1];
    let sum = 0;

    if (pos < 0) {
        return 'OOPS'
    } else if (pos === 1 || pos === 2) {
        return 1
    }

    for (i = 3; i <= pos; i++) {
        sum = fibArray[fibArray.length-1] + fibArray[fibArray.length-2]
        fibArray.push(sum);
    }
    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
