const GAME_STRING = Object.freeze({
  up: 'U',
  down: 'D',
  success: 'O',
  fail: 'X',
  retry: 'R',
  quit: 'Q',
  resultWrapper: (result) => `[${result}]`,
});

const GAME_MESSAGE = Object.freeze({
  start: '다리 건너기 게임을 시작합니다.',
  inputBridge: '다리의 길이를 입력해주세요.',
  inputMove: `이동할 칸을 선택해주세요. (위: ${GAME_STRING.up}, 아래: ${GAME_STRING.down})`,
  inputGame: `게임을 다시 시도할지 여부를 입력해주세요. (재시도: ${GAME_STRING.retry}, 종료: ${GAME_STRING.quit})`,
  result: '최종 게임 결과',
  showGameResult: (bool) => `게임 성공 여부: ${bool}`,
  showGameRetryCount: (count) => `총 시도한 횟수: ${count}`,
});

const GAME_NUMBER = Object.freeze({
  rangeStart: 3,
  rangeEnd: 20,
  randomRangeStart: 0,
  randomRangeEnd: 1,
});

module.exports = { GAME_MESSAGE, GAME_STRING, GAME_NUMBER };