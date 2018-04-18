import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
  return (
    <div className='Output'>
      <p >UserName: {props.userName}</p>
      <p>Name: {props.name}</p>
    </div>
  );
};

export default userOutput;
