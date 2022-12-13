const { ERROR_MESSAGE, GAME_STRING, GAME_NUMBER } = require('./Constant');

const Validation = {
  bridgeLength(number) {
    this.bridgeRange(number);
    this.bridgeInterger(number);
  },
  bridgeRange(number) {
    if (number < GAME_NUMBER.rangeStart || number > GAME_NUMBER.rangeEnd) {
      throw new Error(ERROR_MESSAGE.bridgeRange);
    }
  },
  bridgeInterger(number) {
    if (!Number.isInteger(number)) {
      throw new Error(ERROR_MESSAGE.interger);
    }
  },
  wrongMove(userKey) {
    if (userKey !== GAME_STRING.up && userKey !== GAME_STRING.down) {
      throw new Error(ERROR_MESSAGE.wrongMove);
    }
  },
  wrongRetryOrQuit(userKey) {
    if (userKey !== GAME_STRING.retry && userKey !== GAME_STRING.quit) {
      throw new Error(ERROR_MESSAGE.wrongRetryOrQuit);
    }
  },
};

module.exports = Validation;
