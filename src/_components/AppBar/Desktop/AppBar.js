import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import QuieneSomos from './Menu/QuieneSomos.js';
import Ministerio from './Menu/Ministerios.js';
import Multimedia from './Menu/Multimedia.js';
import Reflexiones from './Menu/Reflexiones.js';
import Contacto from './Menu/Contacto.js';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    color: 'white',
    
  },
  title: {
    flexGrow: 1, 
    color: '#ffa000',
  },

  subtitle: {
    color: 'black',
  },
  
  margin: {
  margin: '9px',
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <AppBar position="static" color="#ffffff">
            <Toolbar>
              <Grid item xs={5}>
                <Typography variant="h5" className={classes.title}>
                    Nueva Vida
                </Typography>
                  </Grid>
                  <Grid item xs={1} className={classes.margin}>
                   <QuieneSomos />
                  </Grid>
                  <Grid item xs={1} className={classes.margin}>
                   <Ministerio />
                  </Grid>
                  <Grid item xs={1} className={classes.margin}>
                   <Multimedia />
                  </Grid>
                  <Grid item xs={1} className={classes.margin}>
                    <Reflexiones />
                  </Grid>
                  <Grid item xs={1} className={classes.margin}>
                    <Contacto />
                  </Grid>
            </Toolbar>
        </AppBar>
    </div>
  );
}