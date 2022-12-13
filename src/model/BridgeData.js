/**
 * 다리 건너기 게임의 정보를 갖는 클래스
 */
class BridgeData {
  #bridgeLength;

  #bridge;

  #curIndex = 0;

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
}

module.exports = BridgeData;
