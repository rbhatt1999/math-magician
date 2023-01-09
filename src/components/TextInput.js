import React from 'react';
import PropTypes from 'prop-types';

export default class TextInput extends React.PureComponent {
  changeHandler() {
    const { value } = this.props;
    return value;
  }

  render() {
    const { value } = this.props;
    return <input type="text" value={value} onChange={this.changeHandler} />;
  }
}

TextInput.propTypes = {
  value: PropTypes.number.isRequired,
};
