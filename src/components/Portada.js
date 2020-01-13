import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import cover from '../imgs/ep-3.jpg';
import Grid from '@material-ui/core/Grid';

const Portada = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  }
}));

export default function FullWidthGrid() {
  const classes = Portada();
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <img width="100%" src={cover} alt="Fondo" />
        </Grid>
      </Grid>
    </div>
  );
}

