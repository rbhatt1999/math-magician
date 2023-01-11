import React from 'react';
import calculate from '../logic/calculate';
import CalculatorButton from './CalculatorButton';
import TextInput from './TextInput';

export default class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        total: '',
        next: '',
        operation: '',
      },
    };
  }

  handleClick(name) {
    const { data } = this.state;
    this.setState({
      data: calculate(data, name),
    });
  }

  textValue() {
    const { data } = this.state;
    if (data.next) {
      return Number(data.next);
    }

    if (!data.next && data.total) {
      return Number(data.total);
    }
    return 0;
  }

  render() {
    return (
      <div className="calculator">
        <div className="grid cols-4">
          <div className="span-4">
            <TextInput value={this.textValue()} />
          </div>
          <CalculatorButton text="AC" handleClick={() => this.handleClick('AC')} />
          <CalculatorButton text="+/-" handleClick={() => this.handleClick('+/-')} />
          <CalculatorButton text="%" handleClick={() => this.handleClick('%')} />
          <CalculatorButton className="bg-orange" text="÷" handleClick={() => this.handleClick('÷')} />
          <CalculatorButton text="7" handleClick={() => this.handleClick('7')} />
          <CalculatorButton text="8" handleClick={() => this.handleClick('8')} />
          <CalculatorButton text="9" handleClick={() => this.handleClick('9')} />
          <CalculatorButton className="bg-orange" text="x" handleClick={() => this.handleClick('x')} />
          <CalculatorButton text="4" handleClick={() => this.handleClick('4')} />
          <CalculatorButton text="5" handleClick={() => this.handleClick('5')} />
          <CalculatorButton text="6" handleClick={() => this.handleClick('6')} />
          <CalculatorButton className="bg-orange" text="-" handleClick={() => this.handleClick('-')} />
          <CalculatorButton text="1" handleClick={() => this.handleClick('1')} />
          <CalculatorButton text="2" handleClick={() => this.handleClick('2')} />
          <CalculatorButton text="3" handleClick={() => this.handleClick('3')} />
          <CalculatorButton className="bg-orange" text="+" handleClick={() => this.handleClick('+')} />
          <CalculatorButton className="span-2" text="0" handleClick={() => this.handleClick('0')} />
          <CalculatorButton text="." handleClick={() => this.handleClick('.')} />
          <CalculatorButton className="bg-orange" text="=" handleClick={() => this.handleClick('=')} />
        </div>
      </div>
    );
  }
}
