import { useState } from 'react';
import calculate from '../logic/calculate';
import CalculatorButton from './CalculatorButton';
import TextInput from './TextInput';

const Calculator = () => {
  const [data, setData] = useState({
    total: '',
    next: '',
    operation: '',
  });

  const handleClick = (name) => {
    setData(calculate(data, name));
  };

  const textValue = () => {
    if (data.next) {
      return Number(data.next);
    }

    if (!data.next && data.total) {
      return Number(data.total);
    }

    return 0;
  };

  return (
    <div className="calculator">
      <div className="grid cols-4">
        <div className="span-4">
          <TextInput value={textValue()} />
        </div>
        <CalculatorButton text="AC" handleClick={() => handleClick('AC')} />
        <CalculatorButton text="+/-" handleClick={() => handleClick('+/-')} />
        <CalculatorButton text="%" handleClick={() => handleClick('%')} />
        <CalculatorButton className="bg-orange" text="÷" handleClick={() => handleClick('÷')} />
        <CalculatorButton text="7" handleClick={() => handleClick('7')} />
        <CalculatorButton text="8" handleClick={() => handleClick('8')} />
        <CalculatorButton text="9" handleClick={() => handleClick('9')} />
        <CalculatorButton className="bg-orange" text="x" handleClick={() => handleClick('x')} />
        <CalculatorButton text="4" handleClick={() => handleClick('4')} />
        <CalculatorButton text="5" handleClick={() => handleClick('5')} />
        <CalculatorButton text="6" handleClick={() => handleClick('6')} />
        <CalculatorButton className="bg-orange" text="-" handleClick={() => handleClick('-')} />
        <CalculatorButton text="1" handleClick={() => handleClick('1')} />
        <CalculatorButton text="2" handleClick={() => handleClick('2')} />
        <CalculatorButton text="3" handleClick={() => handleClick('3')} />
        <CalculatorButton className="bg-orange" text="+" handleClick={() => handleClick('+')} />
        <CalculatorButton className="span-2" text="0" handleClick={() => handleClick('0')} />
        <CalculatorButton text="." handleClick={() => handleClick('.')} />
        <CalculatorButton className="bg-orange" text="=" handleClick={() => handleClick('=')} />
      </div>
    </div>
  );
};

export default Calculator;
