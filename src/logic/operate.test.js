import operate from './operate';

describe('Test the operate logic code', () => {
  it('Sould add two numbers', () => {
    expect(operate(4, 5, '+')).toEqual('9');
  });
  it('Sould subtract two numbers', () => {
    expect(operate(99, 9, '-')).toEqual('90');
  });
  it('Sould multiply two numbers', () => {
    expect(operate(5, 10, 'x')).toEqual('50');
  });
  it('Sould divide two numbers', () => {
    expect(operate(100, 5, '÷')).toEqual('20');
  });
});
