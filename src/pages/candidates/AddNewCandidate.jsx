import React, { useState } from 'react';
import './candidates.scss';

import { addCandidateFormValidation } from '../../utils/formValidation';
import FormInput from '../../components/formInput/FormInput';
import { addCandidateInputs } from '../../data/formInputs';

import { addCandidate } from '../../services/candidates.service';

const initialState = {
  election_year: '',
  election_round: '',
  election_type: '',
  candidate_party: '',
  citizen_ssn: '',
  citizen_nationality: '',
};

const AddNewCandidate = () => {
  const [formValues, setFormValues] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const noErrors = Object.values(formErrors).every((err) => err === '');
    if (noErrors) {
      addCandidate(formValues);
      // reset form
      setFormValues(initialState);
    }
  };

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    addCandidateFormValidation(setFormErrors, name, value);
  };

  return (
    <div className='form__container'>
      <h3>Add Candidate</h3>
      <form className='form' onSubmit={handleSubmit}>
        {addCandidateInputs.map((input) => (
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
          <label htmlFor='electionType'>Election Type</label>
          <select
            aria-label='Election Type select'
            id='electionType'
            name='election_type'
            value={formValues['election_type']}
            onChange={onInputChange}
            required
          >
            <option value='' disabled>
              Select your election type...
            </option>
            <option value='1'>Presidential</option>
            <option value='2'>Parliamentary</option>
            <option value='3'>Local</option>
          </select>
        </div>
        <div className='selectInput' style={{ marginTop: '10px' }}>
          <label htmlFor='electionRound'>Election Round</label>
          <select
            aria-label='Election Round select'
            id='electionRound'
            name='election_round'
            value={formValues['election_round']}
            onChange={onInputChange}
            required
          >
            <option value='' disabled>
              Select your election round...
            </option>
            <option value='1'>1st</option>
            <option value='2'>2nd</option>
          </select>
        </div>
        <div className='selectInput' style={{ marginTop: '10px' }}>
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
        <button type='submit' className='addCandidateButton'>
          Add Candidate
        </button>
      </form>
    </div>
  );
};

export default AddNewCandidate;
