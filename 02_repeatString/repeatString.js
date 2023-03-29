const repeatString = function (enteredString, numTimes) {
  let resultString = "";

  if (numTimes < 0) {
    return "ERROR";
  } else {
    for (i = 0; i < numTimes; i++) {
      resultString = resultString + enteredString;
    }
    return resultString;
  }
};

// Do not edit below this line
module.exports = repeatString;
