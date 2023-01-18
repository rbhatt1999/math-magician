import calculate from './calculate';

describe('Operations of the calculator', () => {
  let data;
  beforeEach(() => {
    data = {
      total: null,
      next: null,
      operation: null,
    };
  });
  test('Pass an objet for 0', () => {
    expect(calculate(data, '0')).toStrictEqual({ total: null, next: '0' });
  });
  test('Get sum of two numbers ', () => {
    data = calculate(data, '5');
    data = calculate(data, '+');
    expect(calculate(data, '5')).toStrictEqual({ total: '5', next: '5', operation: '+' });
  });
  test('Get subtraction of two numbers ', () => {
    data = calculate(data, '10');
    data = calculate(data, '-');
    data = calculate(data, '5');
    expect(calculate(data, '=')).toStrictEqual({ total: '5', next: null, operation: null });
  });
  test('Get multiplication of two numbers ', () => {
    data = calculate(data, '2');
    data = calculate(data, 'x');
    data = calculate(data, '2');
    expect(calculate(data, '=')).toStrictEqual({ total: '4', next: null, operation: null });
  });
  test('Get division of two numbers ', () => {
    data = calculate(data, '20');
    data = calculate(data, '÷');
    data = calculate(data, '4');
    expect(calculate(data, '=')).toStrictEqual({ total: '5', next: null, operation: null });
  });
});