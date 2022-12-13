const { GAME_STRING } = require('../Constant');

/**
 * 다리 건너기 게임의 정보를 갖는 클래스
 */
class BridgeData {
  #bridge;

  #curIndex = 0;

  #bridgeResult = [[], []];

  #retryCount = 1;

  /**
   * 생성한 다리를 저장하는 메서드
   */
  setBridge(bridge) {
    this.#bridge = bridge;
  }

  /**
   * 저장한 다리를 반환하는 메서드
   */
  getBridge() {
    return this.#bridge;
  }

  /**
   * 사용자가 맞추었을 경우 현재의 다리 순서를  늘려주는 메서드
   */
  setIndex() {
    this.#curIndex += 1;
  }

  /**
   * 현재의 다리 순서를 알려주는 메서드
   */
  getIndex() {
    return this.#curIndex;
  }

  /**
   * 사용자가 성공하였는 지 반환하는 메서드
   */
  isSuccess(userKey) {
    return this.#bridge[this.#curIndex] === userKey;
  }

  /**
   * 다리를 모두 건넜는 지 반환하는 메서드
   */
  isFinish() {
    return this.#curIndex === this.#bridge.length;
  }

  /**
   * 다리 건너기에 성공했을 경우 다리 건너기 결과에 성공을 추가하는 메서드
   */
  setBridgeSuccessResult(move) {
    if (move === GAME_STRING.up) {
      this.#bridgeResult[0].push(GAME_STRING.success);
      this.#bridgeResult[1].push(GAME_STRING.space);
    }
    if (move === GAME_STRING.down) {
      this.#bridgeResult[0].push(GAME_STRING.space);
      this.#bridgeResult[1].push(GAME_STRING.success);
    }
  }

  /**
   * 다리 건너기에 실패했을 경우 다리 건너기 결과에 실패를 추가하는 메서드
   */
  setBridgeFailResult(move) {
    if (move === GAME_STRING.up) {
      this.#bridgeResult[0].push(GAME_STRING.fail);
      this.#bridgeResult[1].push(GAME_STRING.space);
    }
    if (move === GAME_STRING.down) {
      this.#bridgeResult[0].push(GAME_STRING.space);
      this.#bridgeResult[1].push(GAME_STRING.fail);
    }
  }

  /**
   * 사용자가 재시작할 경우 실패를 추가했던 다리 건너기 배열을 다시 복구하는 메서드
   */
  setBridgeResultRecover() {
    this.#bridgeResult[0].pop();
    this.#bridgeResult[1].pop();
  }

  /**
   * 현재의 다리 건너기 결과를 반환하는 메서드
   */
  getBridgeResult() {
    return {
      upBridge: this.#bridgeResult[0],
      downBridge: this.#bridgeResult[1],
    };
  }

  /**
   * 시도 횟수를 늘려주는 메서드
   */
  setRetryCount() {
    this.#retryCount += 1;
  }

  /**
   * 시도 횟수를 반환하는 메서드
   */
  getRetryCount() {
    return this.#retryCount;
  }
}

module.exports = BridgeData;
