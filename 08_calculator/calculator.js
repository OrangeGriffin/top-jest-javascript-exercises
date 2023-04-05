const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (array) {
  if (array.length === 0) {
    return 0;
  } else if (array.length === 1) {
    return array[0];
  } else {
    return array.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  }
};

const multiply = function (array) {
  return array.reduce(
    (accumulator, currentValue) => accumulator * currentValue,
    1
  );
};

const power = function (num, pow) {
  return num**pow
};

const factorial = function (num) {
  if (num > 2) {
    let array = []
    while (num >= 1) {
      array.push(num);
      num--;
    }
    return array.reduce(
      (accumulator, currentValue) => accumulator * currentValue,
      1
    );
  } else if (num === 2) {
    return 2;
  } else if (num === 1) {
    return 1;
  } else if (num === 0) {
    return 1;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
