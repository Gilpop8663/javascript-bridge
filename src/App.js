const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('./constants');
const InputView = require('./InputView');

class App {
  play() {
    // InputView.readBridgeSize();
    this.start();
    InputView.readGameCommand();
  }

  start() {
    Console.print(GAME_MESSAGE.start);
  }
}

const app = new App();
app.play();

module.exports = App;
