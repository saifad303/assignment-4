// Problem 1: Let’s play a mind game
function mindGame(positiveNum) {
  if (arguments.length === 0 || arguments.length > 1) {
    return "Error: The function can't accepts more than one or empty parameter.";
  } else if (positiveNum <= 0 || !positiveNum) {
    return "Error: The function can't accepts undefined, negative or zero value as parameter.";
  } else if (typeof positiveNum !== "number") {
    return "Error: The function only accepts number.";
  } else {
    let result = (positiveNum * 3 + 10) / 2 - 5;
    return result;
  }
}
// Problem 2: Finding even or odd
function evenOdd(str) {
  if (arguments.length === 0 || arguments.length > 1) {
    return "Error: The function can't accepts empty or more than one parameter.";
  } else if (!str) {
    return "Error: The function can't accepts undefined or empty string.";
  } else if (typeof str !== "string") {
    return "Error: The function only accepts string.";
  } else {
    const strLength = str.trim().length;
    if (strLength % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  }
}
// Problem 3: Is Less or Greater than seven
function isLGSeven(number) {
  if (arguments.length === 0 || arguments.length > 1) {
    return "Error: The function can't accepts more than one or empty parameter.";
  } else if (!number) {
    return "Error: The function can't accepts undefined.";
  } else if (typeof number !== "number") {
    return "Error: The function only accepts number.";
  } else {
    const subtractNum = number - 7;
    if (subtractNum < 7) {
      return subtractNum;
    } else {
      return number * 2;
    }
  }
}
// Problem 4: Finding Bad data
function findingBadData(arr) {
  if (arguments.length === 0 || arguments.length > 1) {
    return "Error: The function can't accepts more than one or empty parameter.";
  } else if (Array.isArray(arr) !== true) {
    return "Error: The function only accepts Array object.";
  } else {
    let countBadNum = 0;
    for (const element of arr) {
      if (element < 0) {
        countBadNum++;
      }

      if (element === undefined || typeof element !== "number") {
        return "Error: The array must be free from undefined or any other type values. It can only contains number.";
      }
    }
    return countBadNum;
  }
}
// Problem 5: Convert your gems into diamond
function gemsToDiamond(p1, p2, p3) {
  if (arguments.length === 0 || arguments.length > 3 || arguments.length < 3) {
    return "Error: The function can't accepts more than three or less than three parameters.";
  } else if (
    typeof p1 !== "number" ||
    typeof p2 !== "number" ||
    typeof p3 !== "number"
  ) {
    return "Error: The function only accepts number.";
  } else if (!p1 || !p2 || !p3 || p1 <= 0 || p2 <= 0 || p3 <= 0) {
    return "Error: The function can't accept undefined, negative or zero value as parameters.";
  } else {
    let totalDiamond = p1 * 21 + p2 * 32 + p3 * 43;
    if (totalDiamond > 2000) {
      return totalDiamond - 2000;
    } else {
      return totalDiamond;
    }
  }
}
