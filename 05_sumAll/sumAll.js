const sumAll = function (num1, num2) {
  let largeNum;
  let smallNum;
  let sum = 0;

  if (num1 >= 0 && num2 >= 0) {
    if (num1 > num2) {
      largeNum = num1;
      smallNum = num2;
    } else {
      largeNum = num2;
      smallNum = num1;
    }

    for (i = smallNum; i <= largeNum; i++) {
      sum = sum + i;
    }
    return sum;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
