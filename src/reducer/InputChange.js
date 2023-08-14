import React, { useState } from 'react';




function InputChange() {
    const [name, setName] = useState({
        firstName: 'varun',
        lastName: 'pal'
    })


  return (
    <>
    <div>
        <input type='text' placeholder='Type Something' value={name.firstName} onChange={e => setName({firsName: e.target.value})}/>
        <input type='text' placeholder='last name' value={name.lastName} onChange={e => setName({lastName: e.target.value})}/>
        </div>
    </>
  )
}

export default InputChange;