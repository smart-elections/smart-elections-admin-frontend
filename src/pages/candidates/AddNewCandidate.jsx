import React, { useState } from 'react';
import './candidates.scss';

import { addCandidateFormValidation } from '../../utils/formValidation';
import FormInput from '../../components/formInput/FormInput';
import { addCandidateInputs } from '../../data/formInputs';

import { addCandidate } from '../../services/candidates.service';
import Button from '@mui/material/Button';
import ImageIcon from '@mui/icons-material/Image';
import Compressor from 'compressorjs';

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
  const [picData, setPicData] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formValues);
    console.log(picData.selectedFiles);
    const noErrors = Object.values(formErrors).every((err) => err === '');
    if (noErrors) {
      addCandidate(formValues, picData.selectedFiles);
      // reset form
      setFormValues(initialState);
    }
  };

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    addCandidateFormValidation(setFormErrors, name, value);
  };

  const handleCompressedUpload = async (image) => {
    return new Promise((resolve, reject) => {
      try {
        new Compressor(image, {
          quality: 0.8, // 0.6 can also be used, but its not recommended to go below.

          success: (compressedResult) => {
            // compressedResult has the compressed file.

            // Use the compressed file to upload the images to your server.

            resolve({
              ...picData,

              selectedFiles: compressedResult,
            });
          },
        });
      } catch (error) {
        reject(error);
      }
    });
  };

  // arrow function that handles the upload of a new user image
  const onImageChange = async (event) => {
    try {
      if (event.target.files[0].type.toString().includes('image')) {
        let image = await handleCompressedUpload(event.target.files[0]);

        setPicData(image);
      } else {
        alert('File type should be an image');
      }
    } catch (error) {
      console.log(error);
    }
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
        <div className='selectInput' style={{ marginTop: '10px' }}>
          <label htmlFor='citizenNationality'>Candidate Nationality</label>
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

        <>
          <input
            color='primary'
            accept='image/*'
            type='file'
            onChange={onImageChange}
            id='icon-button-file'
            style={{ display: 'none' }}
          />
          <label htmlFor='icon-button-file'>
            <Button
              variant='contained'
              component='span'
              className='formInput'
              size='large'
              color='primary'
              style={{
                marginTop: '15px',
              }}
            >
              <div
                style={{
                  display: '  flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ImageIcon />
                <span>&nbsp;&nbsp;Upload Profile Image</span>
              </div>
            </Button>
          </label>
        </>

        <button type='submit' className='addCandidateButton'>
          Add Candidate
        </button>
      </form>
    </div>
  );
};

export default AddNewCandidate;
