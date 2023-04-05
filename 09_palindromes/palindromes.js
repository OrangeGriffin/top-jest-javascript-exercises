const palindromes = function (str) {
  const lowerCase = str.toLowerCase();
  const removedPunctuation = lowerCase.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ""); // remove punctation
  const charsOnly = removedPunctuation.replace(/\s/g, ""); // remove whitespace
  const forward = charsOnly.split(""); // Place characters in array
  const forwardCopy = [...forward];
  const reversed = forwardCopy.reverse();

let match = false;

  for (i = 0; i < forward.length; i++) {
    if (forward[i] === reversed[i]) {
      match = true;
    } else {
      match = false;
      return match;
    }
  }
  return match;
};

// Do not edit below this line
module.exports = palindromes;
