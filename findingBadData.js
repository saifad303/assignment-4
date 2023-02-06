function findingBadData(arr) {
  if (arguments.length === 0 || arguments.length > 1) {
    return "Error: This function can't accept more than one or empty parameter.";
  } else if (Array.isArray(arr) !== true) {
    return "Error: This function only accept Array object.";
  } else {
    let countBadNum = 0;
    for (const element of arr) {
      if (element < 0) {
        countBadNum++;
      }

      if (element === undefined || typeof element !== "number") {
        return "Error: array can't contain undefined or any other type. It can only contains number.";
      }
    }
    return countBadNum;
  }
}
console.log(findingBadData([2, -5, -7, "undefined"]));

// Input: [ 1,2,5 ]

// Output: 0

// Input: [ 2, -5, -7, -13 ]

// Output: 3

// Input: [ -4, -9, -5, -33, -55 ]

// Output: 5

// to test exceptions
// 1) put zero and negative number or undefined
// 2) send more or less than 1 parameter
// 2) send any type but array
//inert undefined, string in array
