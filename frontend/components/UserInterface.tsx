import * as React from 'react';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import AddAllergyByHealthLabel from './AddHealthLabel';
import AddAllergy from './AddAllergy';
import GetIngredients from './GetIngredients';
import RecipeCards from './RecipeCards';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import NutriContext from '../store/nutri-context.js';
import { styled } from '@mui/material/styles';

export default function DividerStack() {
  const nutriContext = React.useContext(NutriContext);
  const healthLabelActive = nutriContext.healthLabelActive;

  // interface Props {
  //   container: any;
  //   spacing: number;
  //   justify: string;
  //   alighItems: string;
  //   direction: string;
  //   sx: any;
  // }

  // const customGrid = styled(Grid){
  //   container: boolean = true,
  //   spacing: number =  2,
  //   justify: string = 'center',
  //   alignItems: string ='center',
  //   direction='column',
  //   sx={{ mt: 6, pb: 4 }}
  // } as typeof Grid;

  return (
    <div>
      <Grid
        container={true}
        spacing={2}
        justifyContent='center'
        alignItems='center'
        direction='column'
        sx={{ mt: 6, pb: 4 }}>
        {/* <Grid container={true} spacing={2} ></Grid> */}
        <Grid item xs={12}>
          <Paper elevation={24} sx={{ p: 5 }}>
            <Stack
              direction='row'
              justifyContent='center'
              alignItems='center'
              divider={<Divider orientation='vertical' flexItem />}
              spacing={9}>
              {healthLabelActive && <AddAllergyByHealthLabel />}
              {!healthLabelActive && <AddAllergy />}
              <GetIngredients />
            </Stack>
          </Paper>
        </Grid>
      </Grid>
      <RecipeCards />
    </div>
  );
}
