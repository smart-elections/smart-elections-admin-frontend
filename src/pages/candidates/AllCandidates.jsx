import React from 'react';
import { useState, useEffect } from 'react'

import './candidates.scss';

const AllCandidates = () => {

  const [candidates, setCandidates] = useState([]);

  const getCandidates = async () => {
    const response = await fetch('http://ec2-34-207-166-28.compute-1.amazonaws.com:8000/candidates');
    const data = await response.json();
    setCandidates(data.data);
  }

  useEffect(() => {
    getCandidates();
  }
    , []);

  return (
    <div className="candidates__container">
      <h3 className="p-3 text-center">All Candidates</h3>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Party</th>
            <th>Citizen SSN</th>
          </tr>
        </thead>
        <tbody>
          {candidates && candidates.map((candidate) => (
            <tr key={candidate.id}>
              <td>{candidate.citizen_firstname}</td>
              <td>{candidate.citizen_lastname}</td>
              <td>{candidate.candidate_party}</td>
              <td>{candidate.citizen_ssn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllCandidates;
