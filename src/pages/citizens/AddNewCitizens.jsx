import React, { useState } from 'react';
import './citizens.scss';

import { addCitizenFormValidation } from '../../utils/formValidation';
import FormInput from '../../components/formInput/FormInput';
import { addCitizenInputs } from '../../data/formInputs';

import { addCitizen } from '../../services/citizens.service';

const initialState = {
  citizen_ssn: '',
  citizen_nationality: '',
  citizen_firstname: '',
  citizen_lastname: '',
  citizen_commune: '',
  citizen_yob: '',
  citizen_gender: '',
  citizen_marital: '',
};

const AddNewCitizen = () => {
  const [formValues, setFormValues] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formValues);

    const noErrors = Object.values(formErrors).every((err) => err === '');
    if (noErrors) {
      addCitizen(formValues);
      // reset form
      setFormValues(initialState);
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
        <div className='selectInput'>
          <label htmlFor='citizenNationality'>Citizen Nationality</label>
          <select
            aria-label='Citizen Nationality select'
            id='citizenNationality'
            name='citizen_nationality'
            value={formValues['citizen_nationality']}
            onChange={onInputChange}
            required
          >
            <option value='' disabled>
              Select your nationality...
            </option>
            <option value='french'>French</option>
          </select>
        </div>
        <div className='selectInput' style={{ marginTop: '10px' }}>
          <label htmlFor='citizenMarital'>Citizen Martial Status</label>
          <select
            aria-label='Citizen Martial Status select'
            id='citizenMarital'
            name='citizen_marital'
            value={formValues['citizen_marital']}
            onChange={onInputChange}
            required
          >
            <option value='' disabled>
              Select your martial status...
            </option>
            <option value='1'>Single</option>
            <option value='2'>Married</option>
            <option value='3'>Divorced</option>
            <option value='4'>Widow</option>
          </select>
        </div>
        <div className='selectInput' style={{ marginTop: '10px' }}>
          <label htmlFor='citizenGender'>Citizen Gender</label>
          <select
            aria-label='Citizen Gender select'
            id='citizenGender'
            name='citizen_gender'
            value={formValues['citizen_gender']}
            onChange={onInputChange}
            required
          >
            <option value='' disabled>
              Select your gender...
            </option>
            <option value='1'>Male</option>
            <option value='2'>Female</option>
          </select>
        </div>
        <button type='submit' className='addCitizenButton'>
          Add Citizen
        </button>
      </form>
    </div>
  );
};

export default AddNewCitizen;
