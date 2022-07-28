import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MUIDataTable from 'mui-datatables';
import './elections.scss';

const AllElections = () => {
  const [elections, setElections] = useState([]);

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
    const response = await axios.get('/elections');
    setElections(response.data.data);
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
      options: { display: 'true', filter: true },
    },
    {
      name: 'election_type',
      label: 'Election Type',
      options: { display: 'true', filter: true },
    },
    {
      name: 'election_round',
      label: 'Election Round',
      options: { display: 'true', filter: true },
    },
    {
      name: 'election_start',
      label: 'Start Date',
      options: { display: 'true', filter: false },
    },
    {
      name: 'election_end',
      label: 'End Date',
      options: { display: 'true', filter: false },
    },
  ];

  return (
    <div>
      <MUIDataTable
        className='electionsTable'
        title={'All Elections'}
        columns={columns}
        data={elections}
        options={options}
      />
    </div>
  );
};

export default AllElections;
