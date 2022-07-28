import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MUIDataTable from 'mui-datatables';
import './citizens.scss';

const AllCitizens = () => {
  const [citizens, setCitizens] = useState([]);

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
    const response = await axios.get('/citizens');
    setCitizens(response.data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const columns = [
    {
      name: 'citizen_id',
      label: 'Citizen ID',
      options: { display: 'true', filter: false },
    },
    {
      name: 'citizen_ssn',
      label: 'Social Security Number',
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
      name: 'citizen_gender',
      label: 'Gender',
      options: { display: 'true', filter: false },
    },
    {
      name: 'citizen_commune',
      label: 'Commune',
      options: { display: 'false', filter: true },
    },
  ];

  return (
    <div>
      <MUIDataTable
        className='citizenstable'
        title={'All Citizens'}
        columns={columns}
        data={citizens}
        options={options}
      />
    </div>
  );
};

export default AllCitizens;
