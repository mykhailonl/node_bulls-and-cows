'use strict';

import readline from 'readline';
import { generateRandomNumber } from './modules/generateRandomNumber';
import { checkIsValidUserInput } from './modules/checkIsValidUserInput';
import { getBullsAndCows } from './modules/getBullsAndCows';

const terminal = readline.createInterface(process.stdin, process.stdout);

const numberToGuess = generateRandomNumber();

terminal.question('Guess the number', (userNumber) => {
  if (!checkIsValidUserInput(userNumber)) {
    return;
  }

  if (userNumber === numberToGuess) {
    terminal.close();
  } else {
    getBullsAndCows(userNumber, numberToGuess);
  }
});
