const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE, GAME_STRING } = require('../Constant');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 게임 시작 문구를 출력한다.
   */
  printStart() {
    Console.print(GAME_MESSAGE.start);
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(upBridge, downBridge) {
    const bridge = this.getUpAndDownStringBridge(upBridge, downBridge);

    Console.print(bridge);
  },

  /**
   * 다리 건너기 결과를 입력받아 하나의 문자열로 반환하는 메서드
   */
  getUpAndDownStringBridge(upBridge, downBridge) {
    const stringUpBridge = GAME_STRING.resultWrapper(
      this.getStringBridge(upBridge)
    );
    const stringDownBridge = GAME_STRING.resultWrapper(
      this.getStringBridge(downBridge)
    );

    return `${stringUpBridge}\n${stringDownBridge}`;
  },

  /**
   * 다리를 입력받아 문자열로 반환하는 메서드
   */
  getStringBridge(bridge) {
    return bridge.join(GAME_STRING.dividingLine);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(upBridge, downBridge) {
    const bridgeReulst = this.getUpAndDownStringBridge(upBridge, downBridge);
    const result = `${GAME_MESSAGE.result}\n${bridgeReulst}\n`;
    Console.print(result);
  },

  /**
   * 게임의 성공 여부를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printGameSuccessResult(isSuccess) {
    if (isSuccess) {
      Console.print(GAME_MESSAGE.showGameResult(GAME_STRING.koreanSuccess));
      return;
    }
    Console.print(GAME_MESSAGE.showGameResult(GAME_STRING.koreanFail));
  },

  /**
   * 게임의 시도 횟수를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printGameRetryCount(count) {
    Console.print(GAME_MESSAGE.showGameRetryCount(count));
  },

  /**
   * 게임을 종료하는 메서드
   */
  close() {
    Console.close();
  },

  /**
   * 메세지를 출력하는 메서드
   */
  printMessage(message) {
    Console.print(message);
  },
};

module.exports = OutputView;
