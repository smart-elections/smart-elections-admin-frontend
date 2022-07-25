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