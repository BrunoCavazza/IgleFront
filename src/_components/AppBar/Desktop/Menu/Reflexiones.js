import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  title: {
    color: 'black',
  },
}));

export default function MenuListComposition() {
  const classes = useStyles();
 
  return (
    <div className={classes.root}>
      <div>
        <Button>
         <Typography variant="h7" className={classes.title}>Reflexiones</Typography> 
        </Button>
      </div>
    </div>
  );
}