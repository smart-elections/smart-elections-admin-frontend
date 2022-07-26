export const addCandidateInputs = [
  {
    id: 1,
    name: 'citizen_ssn',
    type: 'text',
    placeholder: 'Social Security Number',
    required: true,
    label: 'Social Security Number',
  },
  {
    id: 2,
    name: 'candidate_party',
    type: 'text',
    placeholder: 'Candidate Political Party',
    required: true,
    label: 'Candidate Political Party',
  },
];

export const addCitizenInputs = [
  {
    id: 1,
    name: 'citizen_ssn',
    type: 'text',
    placeholder: 'Social Security Number',
    required: true,
    label: 'Social Security Number',
  },
  {
    id: 2,
    name: 'citizen_firstname',
    type: 'text',
    placeholder: 'First Name',
    required: true,
    label: 'Citizen First Name',
  },
  {
    id: 3,
    name: 'citizen_lastname',
    type: 'text',
    placeholder: 'Last Name',
    required: true,
    label: 'Citizen Last Name',
  },
  {
    id: 4,
    name: 'citizen_yob',
    type: 'date',
    placeholder: 'Year of Birth',
    required: true,
    label: 'Citizen Year of Birth',
  },
  {
    id: 5,
    name: 'citizen_commune',
    type: 'text',
    placeholder: 'Commune',
    required: true,
    label: 'Citizen Commune',
  },
];

export const addElectionInputs = [
  {
    id: 1,
    name: 'election_year',
    type: 'number',
    min: 2022,
    placeholder: 'Election Year',
    required: true,
    label: 'Election Year',
  },
  {
    id: 3,
    name: 'election_start',
    type: 'date',
    min: new Date().toISOString().slice(0, 10),
    placeholder: 'Election Start Date',
    required: true,
    label: 'Election Start Date',
  },
  {
    id: 4,
    name: 'election_end',
    type: 'date',
    min: new Date().toISOString().slice(0, 10),
    placeholder: 'Election End Date',
    required: true,
    label: 'Election End Date',
  },
];
