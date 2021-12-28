import React from 'react';
import { Grid } from '@material-ui/core';
import Header from './components/template/Header';
import Content from './components/template/Content';
import styled from "styled-components";

function Step1() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid xs={12} sm={8}>
          <Content />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Step1;