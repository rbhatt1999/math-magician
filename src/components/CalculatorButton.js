import React from 'react';
import PropTypes from 'prop-types';

export default class CalculatorButton extends React.PureComponent {
  render() {
    const { text, className, handleClick } = this.props;
    return (
      <button className={`btn ${className}`} type="button" onClick={handleClick}>
        {text}
      </button>
    );
  }
}

CalculatorButton.defaultProps = {
  className: '',
};

CalculatorButton.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};
