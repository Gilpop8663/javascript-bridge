const { Console } = require('@woowacourse/mission-utils');
const { GAME_STRING } = require('./Constants');

const Utils = {
  readLine(message, callback) {
    Console.print(message);
    Console.readLine(GAME_STRING.empty, callback);
  },
};

module.exports = Utils;
