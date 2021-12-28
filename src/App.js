// import React from 'react';
// import styled from "styled-components";
// import { Button, ButtonProps } from "@material-ui/core/";


// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
// `;
// const Wrapper= styled.section`
//   padding: 4em;
//   background: papayawhip;
// `;
// const App = () => {
//   return (
//     <Wrapper>
//       <Title>
//         Hello World!
//       </Title>
//     </Wrapper>
//   );
// }

// export default App;

import logo from './logo.svg';
import './App.css';
import { Grid } from '@material-ui/core';
import Header from './components/template/Header';

function App() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid sm={2} />
        <Grid xs={12} sm={8}>
          item2item2item2item2item2item2item2item2item2item2item2item2
          item2item2item2item2item2item2item2item2item2item2item2item2
          item2item2item2item2item2item2item2item2item2item2item2item2
          item2item2item2item2item2item2item2item2item2item2item2item2
          item2item2item2item2item2item2item2item2item2item2item2item2
        </Grid>
        <Grid sm={2} />
      </Grid>
    </Grid>
  );
}

export default App;