import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
      '& label': {
        color:'white'
      }
    },
    '& .MuiInputBase-root': {
        color: 'white'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
        borderRadius: '0px',
      },
      '&:hover fieldset': {
        borderColor: '#2962FF',
        transition: 'border-color 0.5s',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#2962FF',
      },
  },
}
}));

export default function FormPropsTextFields() {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-password-input"
          label="Name"
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          id="outlined-password-input"
          label="Email"
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          id="outlined-password-input"
          label="Message"
          autoComplete="current-password"
          variant="outlined"
        />
      </div>
    </form>
  );
}