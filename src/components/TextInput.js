import PropTypes from 'prop-types';

const TextInput = (props) => {
  const changeHandler = () => {
    const { value } = props;
    return value;
  };

  const { value } = props;
  return <input type="text" value={value} onChange={changeHandler} />;
};

TextInput.propTypes = {
  value: PropTypes.number.isRequired,
};

export default TextInput;
