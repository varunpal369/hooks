import React from 'react';
import { FirstName , LastName, CityName } from '../App';

function CompC() {
  return (
    <>
    <FirstName.Consumer>
        {(fname) => {
            return (
                <LastName.Consumer>
                    {(lname) => {
                      return (
                        <CityName.Consumer>
                            {(cName) => {
                                return <h1>My Name is {fname} {lname}. My city name is {cName}</h1>
                            }}
                        </CityName.Consumer>
                      )  
                    }}
                </LastName.Consumer>
            ) 
        }}
    </FirstName.Consumer>
    
    </>
    
  )
}

export default CompC;