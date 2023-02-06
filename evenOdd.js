function evenOdd(str) {
  if (arguments.length === 0 || arguments.length > 1) {
    return "Error: This function can't accept empty or more than one parameter.";
  } else if (!str) {
    return "Error: This function can't accept undefined or empty string.";
  } else if (typeof str !== "string") {
    return "Error: This function only accepts string.";
  } else {
    const strLength = str.trim().length;
    if (strLength % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  }
}

console.log(evenOdd(10));

// Input: ‘Phero’

// Output: odd

// Input: ‘Batch7’

// Output: even

// Input: ‘chatgpt’

// Output: odd

// to test exceptions
// 1) put empty or undefined
// 2) send more or less than 1 parameter
// 2) send any type but string
