/*
----------------------------------
Problem 1: Let’s play a mind game
----------------------------------

  Definition: function mindGame can sum a number by 10, multiply by 3, subtract by 5, and divide by 2

  Exception: Errors would happen if we send certain values as parameters. Such as, Calling the function
  1. without sending any parameters.
  2. send more than one parameter.
  3. Parameters can't be undefined or negative.
  4. send parameter of any other type except Number.
*/
function mindGame(positiveNum) {
  if (arguments.length === 0 || arguments.length > 1) {
    return "Error: The function can't accept more than one and empty parameter.";
  } else if (positiveNum < 0 || positiveNum === undefined) {
    return "Error: The function can't accept undefined, negative value as parameter.";
  } else if (typeof positiveNum !== "number") {
    return "Error: The function only accept number.";
  } else {
    let result = (positiveNum * 3 + 10) / 2 - 5;
    return result;
  }
}

/*
----------------------------------
Problem 2: Finding even or odd
----------------------------------

Definition: function evenOdd will take 1 parameter as string, and count the number of characters that the string has. If the string has odd number of characters then the function will return odd. If the string has even number of characters then the function will return even.

  Exception: Errors would happen if we send certain values as parameters. Such as, Calling the function
  1. without sending any parameters.
  2. send more than one parameter.
  3. Parameters can't be undefined.
  4. send parameter of any other type except string.
*/
function evenOdd(str) {
  if (arguments.length === 0 || arguments.length > 1) {
    return "Error: The function can't accept empty or more than one parameter.";
  } else if (!str) {
    return "Error: The function can't accept undefined or empty string.";
  } else if (typeof str !== "string") {
    return "Error: The function only accepts string.";
  } else {
    const strLength = str.length;
    if (strLength % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  }
}

/*
-----------------------------------------
Problem 3: Is Less or Greater than seven
-----------------------------------------

Definition: function isLGSeven will subtract it's value by 7. If the result would be less than 7 then the function would return the subtract value. If the result would be more than 7 then the
  function would return subtract value by multiplying 2 with it.

  Exception: Errors would happen if we send certain values as parameters. Such as, Calling the function
  1. without sending any parameters.
  2. send more than one parameter.
  3. Parameters can't be undefined.
  4. send parameter of any other type except Number.
*/
function isLGSeven(number) {
  if (arguments.length === 0 || arguments.length > 1) {
    return "Error: The function can't accept more than one or empty parameter.";
  } else if (!number) {
    return "Error: The function can't accept undefined or empty value";
  } else if (typeof number !== "number") {
    return "Error: The function only accept number.";
  } else {
    const subtractNum = number - 7;
    if (subtractNum < 7) {
      return subtractNum;
    } else {
      return number * 2;
    }
  }
}
/*
---------------------------
Problem 4: Finding Bad data
---------------------------

Definition: function findingBadData will take 1 parameter, and it must be an array. The function will return how many negative values the array has. For instance, If the array is containing [1, -2, -3], then the 
  function will return 2 as an amount of bad data. If the array has nothing but all positive values then the function will return 0.

  Exception: Errors would happen if we send certain values as parameters. Such as, Calling the function
  1. without sending any parameters.
  2. send more than than 1 or empty parameter.
  3. Parameters can't be undefined.
  4. send parameter of any other type except Array object.
  5. Each array element should be a number.
*/
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
        return "Error: this array can't contain undefined or any other type. It can only contains number.";
      }
    }
    return countBadNum;
  }
}

/*
-----------------------------------------
Problem 5: Convert your gems into diamond
-----------------------------------------

Definition: function gemsToDiamond will take 3 parameter and multiply each value by 21, 32, 43 sequentially, and stores the sum of all into totalDiamond. If totalDiamond will be greater than 2000, the function will return the 
  totalDiamond which would be decreased by 2000. If it is less than 2000, then the function will return only the subtracted value.

  Exception: Errors would happen if we send certain values as parameters. Such as, Calling the function
  1. without sending any parameters.
  2. send more than or less than 3 parameter.
  3. Parameters can't be undefined.
  4. send parameter of any other type except Number.
*/
function gemsToDiamond(p1, p2, p3) {
  if (arguments.length === 0 || arguments.length > 3 || arguments.length < 3) {
    return "Error: The function can't accepts more than three or less than three parameters.";
  } else if (p1 === undefined || p2 === undefined || p3 === undefined) {
    return "Error: The function can't accept undefined value as parameters.";
  } else if (
    typeof p1 !== "number" ||
    typeof p2 !== "number" ||
    typeof p3 !== "number"
  ) {
    return "Error: The function only accepts number.";
  } else {
    let totalDiamond = p1 * 21 + p2 * 32 + p3 * 43;
    if (totalDiamond > 2000) {
      return totalDiamond - 2000;
    } else {
      return totalDiamond;
    }
  }
}
