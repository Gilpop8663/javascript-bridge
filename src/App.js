const BridgeGame = require('./controller/BridgeGame');

class App {
  #bridgeGame = new BridgeGame();

  play() {
    this.#bridgeGame.startGame();
  }
}

module.exports = App;
