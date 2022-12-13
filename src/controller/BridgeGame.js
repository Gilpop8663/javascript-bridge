const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const BridgeData = require('../model/BridgeData');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridgeData = new BridgeData();
  startGame() {
    OutputView.printStart();
    InputView.readBridgeSize(this.inputLength.bind(this));
  }

  inputLength(number) {
    const bridge = BridgeMaker.makeBridge(
      number,
      BridgeRandomNumberGenerator.generate
    );

    this.#bridgeData.setBridge(bridge);
    InputView.readMoving(this.inputMove.bind(this));
  }

  inputMove(move) {
    console.log(move);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {}

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
