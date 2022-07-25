import React, { useState } from 'react';
import './candidates.scss';

import { addCandidateFormValidation } from '../../utils/formValidation';
import FormInput from '../../components/formInput/FormInput';
import { addCandidateInputs } from '../../data/formInputs';

const initialState = {
  election_year: '',
  election_round: '',
  election_type: '',
  candidate_party: '',
  citizen_ssn: '',
  citizen_nationality: '',
}

const AddNewCandidate = () => {

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
      //TODO: call backend 'addCandidate'
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
        <button type='submit' className='addCandidateButton'>
          Add Candidate
        </button>
      </form>
    </div>
  );
};

export default AddNewCandidate;