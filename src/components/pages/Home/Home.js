/* Library Imports */
import React, { useState } from 'react';


/* Component Imports */
import TextInput from 'src/components/elements/TextInput/TextInput'

/* Asset Imports */
import StyledHome from './StyledHome';

const Home = () => {

  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  return (
    <StyledHome>
      <TextInput type={"username"} fieldValue={name} updateValue={setName} labelMessage={"Please enter your username"} />
      <TextInput type={"password"} fieldValue={password} updateValue={setPassword} labelMessage={"Please enter your password"} />
    </StyledHome>
  )
};

export default Home;