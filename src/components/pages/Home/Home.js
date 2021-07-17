/* Library Imports */
import React from 'react';


/* Component Imports */
import TextInput from 'src/components/elements/TextInput/TextInput'

/* Asset Imports */
import StyledHome from './StyledHome';

const Home = () => {
  return (
    <StyledHome>
      <TextInput type={"text"} labelMessage={"Please enter your username"} />
    </StyledHome>
  )
};

export default Home;