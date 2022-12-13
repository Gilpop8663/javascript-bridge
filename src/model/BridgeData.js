const { GAME_STRING } = require('../constant');

/**
 * 다리 건너기 게임의 정보를 갖는 클래스
 */
class BridgeData {
  #bridge;

  #curIndex = 0;

  #bridgeResult = [[], []];

  #retryCount = 1;

  setBridge(bridge) {
    this.#bridge = bridge;
  }

  getBridge() {
    return this.#bridge;
  }

  setIndex() {
    this.#curIndex += 1;
  }

  getIndex() {
    return this.#curIndex;
  }

  isFinish() {
    return this.#curIndex === this.#bridge.length;
  }

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

  setBridgeResultRecover() {
    this.#bridgeResult[0].pop();
    this.#bridgeResult[1].pop();
  }

  getBridgeResult() {
    return {
      upBridge: this.#bridgeResult[0],
      downBridge: this.#bridgeResult[1],
    };
  }

  getRetryCount() {
    return this.#retryCount;
  }
}

module.exports = BridgeData;
