const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE, GAME_STRING } = require('../constant');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printStart() {
    Console.print(GAME_MESSAGE.start);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(upBridge, downBridge) {
    const stringUpBridge = GAME_STRING.resultWrapper(
      this.getStringBridge(upBridge)
    );
    const stringDownBridge = GAME_STRING.resultWrapper(
      this.getStringBridge(downBridge)
    );
    const bridge = `${stringUpBridge}\n${stringDownBridge}`;
    Console.print(bridge);
  },

  getStringBridge(bridge) {
    return bridge.join(GAME_STRING.dividingLine);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {},
  /**
   * 게임을 종료하는 메서드
   */
  close() {
    Console.close();
  },
};

module.exports = OutputView;
