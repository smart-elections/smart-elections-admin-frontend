import React, { useState } from 'react';
import './citizens.scss';

import { addCitizenFormValidation } from '../../utils/formValidation';
import FormInput from '../../components/formInput/FormInput';
import { addCitizenInputs } from '../../data/formInputs';

const initialState = {
  citizen_ssn: '',
  citizen_nationality: '',
  citizen_firstname: '',
  citizen_lastname: '',
}

const AddNewCitizen = () => {

  const [formValues, setFormValues] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {};
    for (let key of formData.keys()) {
      data[key] = formData.get(key);
    }
    console.log(data);

    const noErrors = Object.values(formErrors).every((err) => err === '');
    if (noErrors) {
      //TODO: call backend 'addCitizen'
    }
  };

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    addCitizenFormValidation(setFormErrors, name, value);
  };

  return (
    <div className='form__container'>
      <h3>Add Citizen</h3>
      <form className='form' onSubmit={handleSubmit}>
        {addCitizenInputs.map((input) => (
          <FormInput
            className='formInput'
            key={input.id}
            {...input}
            value={formValues[input.name]}
            errorMessage={formErrors[input.name] && formErrors[input.name]}
            onChange={onInputChange}
            inputLabel={input.label}
          />
        ))}
        <button type='submit' className='addCitizenButton'>
          Add Citizen
        </button>
      </form>
    </div>
  );
};

export default AddNewCitizen;
