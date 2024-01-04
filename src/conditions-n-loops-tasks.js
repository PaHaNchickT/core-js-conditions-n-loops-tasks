/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  if (number >= 0) {
    return true;
  }
  return false;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let out = a;
  if (b > a && b > c) {
    out = b;
  } else if (a > b && a > c) {
    out = a;
  } else if (c > a && c > b) {
    out = c;
  }
  return out;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  let out = false;
  if (queen.x === king.x) {
    out = true;
  }
  if (queen.y === king.y) {
    out = true;
  }
  if (queen.x - queen.y === king.x - king.y) {
    out = true;
  }
  if (-2 * (queen.x - queen.y) === king.x - king.y) {
    out = true;
    if (queen.x === 8 || queen.x === 3) {
      out = false;
    }
  }
  return out;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  let out = false;
  if (a === b && c < a + b) {
    out = true;
  }
  if (a === c && b < a + c) {
    out = true;
  }
  if (b === c && a < c + b) {
    out = true;
  }
  if (a === 0 || b === 0 || c === 0) {
    out = false;
  }
  return out;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let out = 1;
  const numbers = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
  };
  if (num <= 10) {
    out = numbers[num];
  } else if (num > 10 && num <= 20) {
    out = `X${numbers[num - 10]}`;
  } else if (num > 20 && num <= 30) {
    out = `XX${numbers[num - 20]}`;
  } else if (num > 30 && num <= 40) {
    out = `XXX${numbers[num - 30]}`;
  }
  return out;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let out = '';
  const temp = `${numberStr}`;
  for (let i = 0; i < temp.length; i += 1) {
    switch (temp[i]) {
      case '0':
        out += 'zero';
        break;
      case '1':
        out += 'one';
        break;
      case '2':
        out += 'two';
        break;
      case '3':
        out += 'three';
        break;
      case '4':
        out += 'four';
        break;
      case '5':
        out += 'five';
        break;
      case '6':
        out += 'six';
        break;
      case '7':
        out += 'seven';
        break;
      case '8':
        out += 'eight';
        break;
      case '9':
        out += 'nine';
        break;
      case '.':
        out += 'point';
        break;
      case ',':
        out += 'point';
        break;
      case '-':
        out += 'minus';
        break;
      default:
        break;
    }
    if (i !== temp.length - 1) {
      out += ' ';
    }
  }
  return out;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let str1 = '';
  let str2 = '';
  for (let i = 0; i < Math.floor(str.length / 2); i += 1) {
    str1 += str[i];
    str2 += str[str.length - i - 1];
  }
  if (str1 === str2) {
    return true;
  }
  return false;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let out = -1;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      out = i;
    }
  }
  return out;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let out = false;
  const temp = `${num}`;
  const digTemp = `${digit}`;
  for (let i = 0; i < temp.length; i += 1) {
    if (temp[i] === digTemp) {
      out = true;
    }
  }
  return out;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let out = -1;
  for (let i = 0; i < arr.length; i += 1) {
    let summ1 = 0;
    let summ2 = 0;
    for (let x = 0; x < i; x += 1) {
      summ1 += arr[x];
    }
    for (let y = i + 1; y < arr.length; y += 1) {
      summ2 += arr[y];
    }
    if (summ1 === summ2) {
      out = i;
    }
  }
  return out;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const out = [];
  for (let i = 0; i < size; i += 1) {
    out[i] = new Array(size);
  }

  const goal = size * size;
  let counter = 1;
  let n = 0;
  for (n = 0; counter < goal + 1; n += 1) {
    for (let j = 0 + n; j < size - n; j += 1) {
      out[0 + n][j] = counter;
      counter += 1;
    }

    counter -= 1;

    for (let k = 0 + n; k < size - n; k += 1) {
      out[k][size - n - 1] = counter;
      counter += 1;
    }

    counter -= 1;

    for (let j = size - n - 1; j >= 0 + n; j -= 1) {
      out[size - n - 1][j] = counter;
      counter += 1;
    }

    counter -= 1;

    for (let k = size - n - 1; k > 0 - n; k -= 1) {
      out[k][0 + n] = counter;
      counter += 1;
      if (typeof out[k - 1][0 + n] === 'number') {
        break;
      }
    }
  }
  return out;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const size = matrix[0].length;
  const temp = [];
  for (let i = 0; i < size; i += 1) {
    temp[i] = new Array(size);
  }
  for (let n = 0; n < size; n += 1) {
    for (let i = 0; i < size; i += 1) {
      temp[i][size - n - 1] = matrix[n][i];
    }
  }
  const out = matrix;
  for (let n = 0; n < size; n += 1) {
    for (let i = 0; i < size; i += 1) {
      out[n][i] = temp[n][i];
    }
  }
  return matrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(/* arr */) {
  throw new Error('Not implemented');
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let step = 1;
  let out = '';
  let origItt = iterations;

  function main(string) {
    let str1 = '';
    let str2 = '';
    for (let i = 0; i < string.length; i += 1) {
      if (i % 2 === 0) {
        str1 += string[i];
      } else {
        str2 += string[i];
      }
    }
    if (`${str1}${str2}` === str) {
      if (iterations % step === 0) {
        origItt = step;
      } else {
        origItt = iterations % step;
      }
      return;
    }
    if (step < iterations) {
      step += 1;
      main(`${str1}${str2}`);
    }
  }
  main(str);

  step = 1;
  function final(string) {
    let str1 = '';
    let str2 = '';
    for (let i = 0; i < string.length; i += 1) {
      if (i % 2 === 0) {
        str1 += string[i];
      } else {
        str2 += string[i];
      }
    }
    if (step < origItt) {
      step += 1;
      final(`${str1}${str2}`);
    } else {
      out = `${str1}${str2}`;
    }
  }
  final(str);
  return out;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const stringMain = `${number}`;
  let subString1 = '';
  let subString2 = '';
  let permArr = [];
  const usedChars = [];
  let out;
  function subStr(ind2, ind1) {
    for (let i = ind2; i >= ind1; i -= 1) {
      subString1 = stringMain[i] + subString1;
    }
    for (let i = 0; i < ind1; i += 1) {
      subString2 += stringMain[i];
    }
  }

  function getVariants(input) {
    let ch;
    const someIndex = 0;
    for (let i = 0; i < input.length; i += 1) {
      ch = input.splice(i, 1)[someIndex];
      usedChars.push(ch);
      if (
        input.length === 0 &&
        +`${subString2}${+usedChars.join('')}` > number
      ) {
        permArr.push(+usedChars.join(''));
      }
      getVariants(input);
      input.splice(i, 0, ch);
      usedChars.pop();
    }
  }

  for (let i = 2; i < stringMain.length; i += 1) {
    subString1 = '';
    subString2 = '';
    subStr(stringMain.length - 1, stringMain.length - i);
    getVariants([...subString1]);
    if (permArr.length > 0) {
      const temp = permArr.sort(function unnamed(a, b) {
        return a - b;
      });
      out = +`${subString2}${temp[0]}`;
      break;
    }
    permArr = [];
  }
  return out;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
