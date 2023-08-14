import React from 'react';
import { FirstName, LastName } from '../App';
import { useContext } from 'react';

function CompD() {
    const fname1 = useContext(FirstName);
    const lname1 = useContext(LastName);
  return (
    <>
        <h1>My name is {fname1} {lname1}</h1>
    </>
  )
}

export default CompD;