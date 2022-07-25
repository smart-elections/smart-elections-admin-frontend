import './formInput.scss';

const FormInput = ({ onChange, errorMessage, ...inputProps }) => {
  return (
    <div className='formInput'>
      <label htmlFor={inputProps.name}>{inputProps.label}</label>
      <input {...inputProps} onChange={onChange} autoComplete='off' />
      <span className='err'>{errorMessage && errorMessage}</span>
    </div>
  );
};

export default FormInput;
