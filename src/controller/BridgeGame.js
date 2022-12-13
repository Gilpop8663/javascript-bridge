const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const BridgeData = require('../model/BridgeData');
const { readBridgeSize } = require('../view/InputView');
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
    const bridge = this.#bridgeData.getBridge();
    const curIndex = this.#bridgeData.getIndex();
    const isSuccess = this.move(bridge, curIndex, move);
    if (isSuccess) {
      return this.moveSucess();
    }

    return this.moveFail();
  }

  /**
   * 사용자가 이동한 칸을 맞추었을 때 사용하는 메서드
   */
  moveSucess() {
    this.#bridgeData.setIndex();
    const bridge = this.#bridgeData.getBridge();
    const curIndex = this.#bridgeData.getIndex();
    if (curIndex < bridge.length) {
      return InputView.readMoving(this.inputMove.bind(this));
    }

    return this.endGame();
  }
  /**
   * 사용자가 이동한 칸을 틀렸을 때 사용하는 메서드
   */
  moveFail() {
    return this.retry();
  }
  /**
   * 사용자가 다리를 끝까지 건넜을 때 사용하는 메서드
   */
  endGame() {}

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  static move(bridge, index, move) {
    if (bridge[index] === move) return true;
    return false;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
