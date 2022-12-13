const BridgeGame = require('./controller/BridgeGame');

class App {
  #bridgeGame = new BridgeGame();

  play() {
    this.#bridgeGame.startGame();
  }
}

const app = new App();
app.play();

module.exports = App;
