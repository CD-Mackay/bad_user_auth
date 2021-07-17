/* Library Imports */
import React, { useEffect, useState } from 'react';


/* Component Imports */

/* Asset Imports */
import StyledTextInput from './StyledTextInput';

const TextInput = ({type, labelMessage}) => {


  let options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


  const handleSelect = (event) => {
    console.log(event.target.value)
  }


  return (
    <StyledTextInput>
      <label htmlFor={type}>{labelMessage}</label>
      <select onChange={() => handleSelect()} name={type} id={type}>
        {options.map((letter) => <option value={letter} key={letter}>{letter}</option>)}
      </select>
    </StyledTextInput>
  )
};

export default TextInput;