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
