/**
 * 다리 건너기 게임의 정보를 갖는 클래스
 */
class BridgeData {
  #bridgeLength;

  #bridge;

  setBridge(bridge) {
    this.#bridge = bridge;
  }
}

module.exports = BridgeData;
