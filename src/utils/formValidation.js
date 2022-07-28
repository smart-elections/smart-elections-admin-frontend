export const addCandidateFormValidation = (setFormErrors, name, value) => {
  setFormErrors((prev) => {
    const errorStateObj = { ...prev, [name]: '' };

    switch (name) {
      case 'citizen_ssn':
        if (!(value.length === 15)) {
          errorStateObj[name] =
            'Social Security Number must be of 15 characters';
        }
        break;

      case 'election_year':
        if (!(value >= 2022)) {
          errorStateObj[name] =
            'Election Year must be greater than or equal to 2022';
        }
        break;

      default:
        break;
    }

    return errorStateObj;
  });
};

export const addCitizenFormValidation = (setFormErrors, name, value) => {
  setFormErrors((prev) => {
    const errorStateObj = { ...prev, [name]: '' };

    switch (name) {
      case 'citizen_ssn':
        if (!(value.length === 15)) {
          errorStateObj[name] =
            'Social Security Number must be of 15 characters';
        }
        break;

      default:
        break;
    }

    return errorStateObj;
  });
};

export const addElectionFormValidation = (setFormErrors, name, value) => {
  setFormErrors((prev) => {
    const errorStateObj = { ...prev, [name]: '' };

    switch (name) {
<<<<<<< HEAD
      case 'election_year':
        if (!(value >= 2022)) {
          errorStateObj[name] =
            'Election Year must be greater than or equal to 2022';
=======
      case 'election_round':
        if (!(value === '1st' || value === '2nd')) {
          errorStateObj[name] =
            'Election Round value must be either 1st or 2nd';
>>>>>>> 8f9d87f57163fbcb3f1b7a879b816d05eac01927
        }
        break;

      default:
        break;
    }

    return errorStateObj;
  });
};
