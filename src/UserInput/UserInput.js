import React from 'react';

const userInput = (props) => {
  const inputStyle = {
    border: '2px solid green'
  };

  return(
    <div>
    <label>New UserName: </label>
      <input type='text'
      style={inputStyle}
      onChange={props.changed}
      value={props.currentUserName} />
    </div>
  )
}

export default userInput;
