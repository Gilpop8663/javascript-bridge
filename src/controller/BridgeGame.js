const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const BridgeData = require('../model/BridgeData');
const { GAME_STRING } = require('../Constant');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const Validation = require('../Validation');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridgeData = new BridgeData();

  /**
   * 다리 건너기 게임을 시작하는 메서드
   */
  startGame() {
    OutputView.printStart();
    InputView.readBridgeSize(this.inputLength.bind(this));
  }

  /**
   * 다리의 길이를 입력받은 후 검증 후 진행을 도와주는 메서드
   */
  inputLength(number) {
    try {
      Validation.bridgeLength(Number(number));
      this.makeAndSaveBridge(Number(number));
      InputView.readMoving(this.inputMove.bind(this));
    } catch (error) {
      OutputView.printMessage(error.message);
      InputView.readBridgeSize(this.inputLength.bind(this));
    }
  }

  /**
   * 다리의 길이를 넘겨받아 다리를 생성하고 저장하는 메서드
   */
  makeAndSaveBridge(number) {
    const bridge = BridgeMaker.makeBridge(
      number,
      BridgeRandomNumberGenerator.generate
    );
    this.#bridgeData.setBridge(bridge);
  }

  /**
   * 사용자의 이동 커맨드를 입력받아 검증한 후 진행을 도와주는 메서드
   */
  inputMove(userKey) {
    try {
      Validation.wrongMove(userKey);
      this.move(userKey);
    } catch (error) {
      OutputView.printMessage(error.message);
      InputView.readMoving(this.inputMove.bind(this));
    }
  }

  /**
   * 사용자가 이동한 칸을 맞추었을 때 사용하는 메서드
   */
  moveSucess(userKey) {
    this.#bridgeData.setIndex();
    this.#bridgeData.setBridgeSuccessResult(userKey);
    this.showMoveResult();
    const isFinish = this.#bridgeData.isFinish();
    if (isFinish) {
      return this.endGame();
    }
    return InputView.readMoving(this.inputMove.bind(this));
  }

  /**
   * 사용자가 이동한 칸을 틀렸을 때 사용하는 메서드
   */
  moveFail(userKey) {
    this.#bridgeData.setBridgeFailResult(userKey);
    this.showMoveResult();

    return InputView.readGameCommand(this.inputGameCommand.bind(this));
  }

  /**
   * 사용자가 다리를 이동한 결과를 출력하는 메서드
   */
  showMoveResult() {
    const { upBridge, downBridge } = this.#bridgeData.getBridgeResult();
    OutputView.printMap(upBridge, downBridge);
  }

  /**
   * 사용자가 다리를 끝까지 건넜을 때 사용하는 메서드
   */
  endGame() {
    const { upBridge, downBridge } = this.#bridgeData.getBridgeResult();
    const retryCount = this.#bridgeData.getRetryCount();
    const isSuccess = this.#bridgeData.isFinish();
    OutputView.printResult(upBridge, downBridge);
    OutputView.printGameSuccessResult(isSuccess);
    OutputView.printGameRetryCount(retryCount);
    OutputView.close();
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(userKey) {
    const isSuccess = this.#bridgeData.isSuccess(userKey);
    if (isSuccess) {
      return this.moveSucess(userKey);
    }

    return this.moveFail(userKey);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#bridgeData.setRetryCount();
    this.#bridgeData.setBridgeResultRecover();
    InputView.readMoving(this.inputMove.bind(this));
  }

  /**
   * 사용자의 게임 재시작 여부 커맨드를 입력받아 진행을 도와주는 메서드
   */
  inputGameCommand(userKey) {
    try {
      Validation.wrongRetryOrQuit(userKey);
      this.setGameBranch(userKey);
    } catch (error) {
      OutputView.printMessage(error.message);
      InputView.readGameCommand(this.inputGameCommand.bind(this));
    }
  }

  /**
   * 게임 재시작 커맨드를 입력받아 재시작 혹은 게임 종료를 하는 메서드
   */
  setGameBranch(userKey) {
    if (userKey === GAME_STRING.retry) {
      return this.retry();
    }
    return this.endGame();
  }
}

module.exports = BridgeGame;
