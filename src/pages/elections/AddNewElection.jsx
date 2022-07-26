import React, { useState } from 'react';
import './elections.scss';

import { addElectionFormValidation } from '../../utils/formValidation';
import FormInput from '../../components/formInput/FormInput';
import { addElectionInputs } from '../../data/formInputs';

import { addElection } from '../../services/elections.service';

const initialState = {
  election_year: '',
  election_type: '',
  election_round: '',
  election_start: '',
  election_end: '',
};

const AddNewElection = () => {
  const [formValues, setFormValues] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formValues);

    const noErrors = Object.values(formErrors).every((err) => err === '');
    if (noErrors) {
      addElection(formValues);
      // reset form

      setFormValues(initialState);
    }
  };

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    addElectionFormValidation(setFormErrors, name, value);
  };

  return (
    <div className='form__container'>
      <h3>Add Election</h3>
      <form className='form' onSubmit={handleSubmit}>
        {addElectionInputs.map((input) => (
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
            <option value='2'>Legislative</option>
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
        <button type='submit' className='addElectionButton'>
          Add Election
        </button>
      </form>
    </div>
  );
};

export default AddNewElection;
