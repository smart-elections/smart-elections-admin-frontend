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

            case 'election_round':
                if (!(value === '1st' || value === '2nd')) {
                    errorStateObj[name] = 'Election Round value must be either 1st or 2nd';
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
            case 'election_round':
                if (!(value === '1st' || value === '2nd')) {
                    errorStateObj[name] = 'Election Round value must be either 1st or 2nd';
                }
                break;

            default:
                break;
        }

        return errorStateObj;
    });
};