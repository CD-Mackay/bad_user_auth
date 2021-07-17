/* Library Imports */
import React, { useEffect, useState } from 'react';


/* Component Imports */

/* Asset Imports */
import StyledTextInput from './StyledTextInput';

const TextInput = ({type, labelMessage}) => {

  const [name, setName] = useState("")
  const [selected, setSelected] = useState("")

  let options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


  const handleSelect = (e) => {
    setSelected(e.target.value)
  }

  const handleAddLetter = () => {
    setName(name.concat(selected))
  }


  return (
    <StyledTextInput>
      <p>{name}</p>
      <label htmlFor={type}>{labelMessage}</label>
      <select onChange={handleSelect} name={type} id={type}>
        {options.map((letter) => <option value={letter} key={letter}>{letter}</option>)}
      </select>
      <button onClick={handleAddLetter}>Add Letter</button>
    </StyledTextInput>
  )
};

export default TextInput;