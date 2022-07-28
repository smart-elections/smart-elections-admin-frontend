import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MUIDataTable from 'mui-datatables';
import './candidates.scss';

const AllCandidates = () => {
  const [candidates, setCandidates] = useState([]);

  const options = {
    filter: true,
    filterType: 'dropdown',
    responsive: 'stacked',
    rowsPerPage: 10,
    rowsPerPageOptions: [10, 25, 50, 100],
    selectableRows: 'none',
    print: false,
    download: false,
    viewColumns: false,
  };

  const getData = async () => {
    const response = await axios.get('/elections/candidates');
    setCandidates(response.data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const columns = [
    {
      name: 'election_id',
      label: 'Election ID',
      options: { display: 'false', filter: false },
    },
    {
      name: 'election_year',
      label: 'Election Year',
      options: { display: 'true' },
    },
    {
      name: 'election_type',
      label: 'Election Type',
      options: { display: 'true' },
    },
    {
      name: 'election_round',
      label: 'Election Round',
      options: { display: 'true' },
    },
    {
      name: 'candidate_id',
      label: 'Candidate ID',
      options: { display: 'false', filter: false },
    },
    {
      name: 'citizen_firstname',
      label: 'First Name',
      options: { display: 'true', filter: false },
    },
    {
      name: 'citizen_lastname',
      label: 'Last Name',
      options: { display: 'true', filter: false },
    },
    {
      name: 'candidate_party',
      label: 'Political Party',
      options: { display: 'true' },
    },
    {
      name: 'citizen_ssn',
      label: 'Social Security Number',
      options: { display: 'true', filter: false },
    },
  ];

  return (
    <div>
      <MUIDataTable
        className='candidatesTable'
        title={'All Candidates'}
        columns={columns}
        data={candidates}
        options={options}
      />
    </div>
  );
};

export default AllCandidates;
