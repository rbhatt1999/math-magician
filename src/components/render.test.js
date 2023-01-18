import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Home from './Home';
import Calculator from './Calculator';
import CalculatorButton from './CalculatorButton';

it('Home renders correctly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Calculator renders correctly', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('CalculatorButton renders correctly', () => {
  const handleClick = () => true;
  const tree = renderer.create(<CalculatorButton text="Submit" handleClick={handleClick} />).toJSON();
  expect(tree).toMatchSnapshot();
});
