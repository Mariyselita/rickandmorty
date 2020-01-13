import React from 'react';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(1),
  },
  textField: {
    width: 200,
  },
}));

export default function InputAdornments() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    search: '',
    weight: '',
    weightRange: '',
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
            <Box width="auto" px={4} py={0} >
              <Link className="space_link" href="#" color="inherit">
                <h1 className="h2-resp"><b>{'Recientes'}</b></h1>
              </Link>
            </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
            <Box width="auto" px={4} py={0}>
              <FormControl fullWidth className={classes.margin}>
                <InputLabel htmlFor="standard-adornment-search">Buscar</InputLabel>
                <Input
                  id="standard-adornment-search"
                  value={values.search}
                  onChange={handleChange('search')}
                  endAdornment={<InputAdornment position="start">
                  </InputAdornment>}
                />
              </FormControl>
            </Box>
        </Grid>
      </Grid>
    </div>
  );
}