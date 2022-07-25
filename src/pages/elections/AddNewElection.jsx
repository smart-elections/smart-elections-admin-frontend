import React, { useState } from 'react';
import './elections.scss';

import { addElectionFormValidation } from '../../utils/formValidation';
import FormInput from '../../components/formInput/FormInput';
import { addElectionInputs } from '../../data/formInputs';

const initialState = {
  election_year: '',
  election_type: '',
  election_round: '',
  election_start: '',
  election_end: '',
}

const AddNewElection = () => {

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
      //TODO: call backend 'addElection'
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
        <button type='submit' className='addElectionButton'>
          Add Election
        </button>
      </form>
    </div>
  );
};

export default AddNewElection;