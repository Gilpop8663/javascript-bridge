const { ERROR_SUBJECT } = require('../src/Constant');
const Validation = require('../src/Validation');

describe('예외 조건 테스트', () => {
  test('다리 길이를 3미만 , 20 초과로 입력하면 예외가 발생한다.', () => {
    expect(() => Validation.bridgeLength(2)).toThrow(ERROR_SUBJECT);
    expect(() => Validation.bridgeLength(21)).toThrow(ERROR_SUBJECT);
  });

  test('다리 길이를 소수로 입력하면 예외가 발생한다.', () => {
    expect(() => Validation.bridgeLength(3.3)).toThrow(ERROR_SUBJECT);
  });

  test('다리 이동 입력을 잘못 입력하면 예외가 발생한다.', () => {
    expect(() => Validation.wrongMove('u')).toThrow(ERROR_SUBJECT);
    expect(() => Validation.wrongMove('a')).toThrow(ERROR_SUBJECT);
  });

  test('게임 재시작 여부 입력을 잘못 입력하면 예외가 발생한다.', () => {
    expect(() => Validation.wrongRetryOrQuit('u')).toThrow(ERROR_SUBJECT);
    expect(() => Validation.wrongRetryOrQuit('r')).toThrow(ERROR_SUBJECT);
  });
});
