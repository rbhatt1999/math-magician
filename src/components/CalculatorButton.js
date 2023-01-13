import PropTypes from 'prop-types';

const CalculatorButton = (props) => {
  const { text, className, handleClick } = props;
  return (
    <button className={`btn ${className}`} type="button" onClick={handleClick}>
      {text}
    </button>
  );
};

CalculatorButton.defaultProps = {
  className: '',
};

CalculatorButton.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

export default CalculatorButton;
