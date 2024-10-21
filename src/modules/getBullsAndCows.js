'use strict';

/**
 * Calculate the number of bulls and cows for a given user input.
 * Bulls are digits that are in the correct position.
 * Cows are digits that are in the wrong position.
 * Assume that the user input and the number to guess
 * are always 4-digit numbers.
 *
 * @param {number} userInput - The user input
 * @param {number} numberToGuess - The number to guess
 * @return {object} An object containing the number of bulls and cows.
 * Example: { bulls: 1, cows: 2 }
 */
function getBullsAndCows(userInput, numberToGuess) {
  const score = {
    bulls: 0,
    cows: 0,
  };

  const userArr = [...String(userInput)];
  const guessArr = [...String(numberToGuess)];

  for (let i = 0; i < userArr.length; i++) {
    if (guessArr[i] === userArr[i]) {
      score.bulls += 1;
    } else if (guessArr.includes(userArr[i])) {
      score.cows += 1;
    }
  }

  return score;
}

module.exports = {
  getBullsAndCows,
};
