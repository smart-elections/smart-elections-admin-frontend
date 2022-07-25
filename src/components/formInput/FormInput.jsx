import './formInput.scss';

const FormInput = ({ onChange, errorMessage, inputLabel, ...inputProps }) => {
  return (
    <div className='formInput'>
      <label htmlFor={inputProps.name}>{inputLabel}</label>
      <input id={inputProps.name} {...inputProps} onChange={onChange} autoComplete='off' />
      <span className='err'>{errorMessage && errorMessage}</span>
    </div>
  );
};

export default FormInput;
