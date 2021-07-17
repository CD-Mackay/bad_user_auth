/* Library Imports */
import React, { useState } from 'react';


/* Component Imports */
import TextInput from 'src/components/elements/TextInput/TextInput'

/* Asset Imports */
import StyledHome from './StyledHome';

const Home = () => {

  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [phase, setPhase] = useState(1);
  return (
    <StyledHome>
      
      {phase === 1 && 
      <div className="form-field">
      <TextInput type={"username"} fieldValue={name} updateValue={setName} labelMessage={"Please enter your username"} />
      <TextInput type={"password"} fieldValue={password} updateValue={setPassword} labelMessage={"Please enter your password"} />
      </div>}
      {phase === 2 && 
      <div className="form-field">
      <TextInput type={"confirmPassword"} fieldValue={confirmPassword} updateValue={setConfirmPassword} labelMessage={"Please confirm your password by entering it in reverse!"} />
      </div>
      }
      <button onClick={() => setPhase(phase + 1)}>Sign up!</button>
    </StyledHome>
  )
};

export default Home;