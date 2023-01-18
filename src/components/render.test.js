import renderer from 'react-test-renderer';
import Home from './Home';
import Calculator from './Calculator';
import CalculatorButton from './CalculatorButton';
import TextInput from './TextInput';
import Quotes from './Quotes';
import Navigation from './Navigation';
import { MemoryRouter } from 'react-router-dom';

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

it('text unput renders correctly', () => {
  const tree = renderer.create(<TextInput value={43} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Quotes renders correctly', () => {
  const tree = renderer.create(<Quotes />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Home renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});