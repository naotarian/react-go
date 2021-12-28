import React from 'react'
import BodyCard from './parts/BodyCard'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import styled from "styled-components";
import {Button,CardActionArea,CardActions} from '@material-ui/core';

const WrapperGrid = styled(Grid)`
  width: 90%;
  margin: auto;
  margin-top: 4rem;
  margin-bottom: 4rem;
`;
const StyledCardActionArea = styled(CardActionArea)`
  outline: none !important;
`;

function Content() {
    return (
        <WrapperGrid  container  spacing={2}>
            <Grid item xs={4}> 
                <StyledCardActionArea href="/" target="_blank">
                        <BodyCard />
                </StyledCardActionArea>
            </Grid>
            <Grid item xs={4}> 
                <StyledCardActionArea href="/" target="_blank">
                        <BodyCard />
                </StyledCardActionArea>
            </Grid>
            <Grid item xs={4}> 
                <StyledCardActionArea href="/" target="_blank">
                        <BodyCard />
                </StyledCardActionArea>
            </Grid>
            <Grid item xs={4}> 
                <StyledCardActionArea href="/" target="_blank">
                        <BodyCard />
                </StyledCardActionArea>
            </Grid>
        </WrapperGrid>
    )
}

export default Content