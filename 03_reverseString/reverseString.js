const reverseString = function (providedString) {
  let reversedString = ""; // Create empty string for result placholder
  const reversedStringArray = []; // Create empty array for the reverse array of the provided string
  const myStrArray = providedString.split(""); // Create array from the providedString


  // Loop through each letter in provided string
  // Place that letter into the reversedStringArray
  while (myStrArray.length > 0) {
    let letter = myStrArray.pop();
    reversedStringArray.push(letter);
  }

  // Loop through each letter in the reversedStringArray
  // Add the letter at each position in the loop to reversedString
  for (i=0; i < reversedStringArray.length; i++) {
    let letter = reversedStringArray[i];
    reversedString = reversedString + letter;
  }

  return reversedString;

};

// Do not edit below this line
module.exports = reverseString;
