import React from 'react';
import { useState, useEffect } from 'react'
import axios from "axios";
import MUIDataTable from "mui-datatables";
import { Select, MenuItem } from "@material-ui/core";
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

  const baseUrl = "http://ec2-34-207-166-28.compute-1.amazonaws.com:8000/elections/candidates";

  const getData = async () => {
    const response = await axios.get(baseUrl);
    setCandidates(response.data.data);
  }

  useEffect(() => {
    getData();
  }
    , [])

  const columns = [
    { name: "election_id", label: "Election ID", options: { display: 'false', filter: false } },
    { name: "election_year", label: "Election Year", options: { display: 'true', filter: false } },
    { name: "election_type", label: "Election Type", options: { display: 'true', filter: false } },
    { name: "election_round", label: "Election Round", options: { display: 'true', filter: false } },
    { name: "candidate_id", label: "Candidate ID", options: { display: 'false', filter: false } },
    { name: "citizen_firstname", label: "First Name", options: { display: 'true', filter: false } },
    { name: "citizen_lastname", label: "Last Name", options: { display: 'true', filter: false } },
    { name: "candidate_party", label: "Political Party", options: { display: 'true' } },
    { name: "citizen_ssn", label: "Social Security Number", options: { display: 'true' } }
  ]

  return (
    <div>
      <MUIDataTable
        className='candidatesTable'
        title={"All Candidates"}
        columns={columns}
        data={candidates}
        options={options}
      />
    </div>
  );
};

export default AllCandidates;