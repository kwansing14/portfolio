import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import emailjs from 'emailjs-com';


const styles = theme => ({
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
  },
  button: {
    backgroundColor: "",
    "&:hover": {
      backgroundColor: "white",
      color:'black !important'
    }
  }
});



class FormPropsTextFields extends React.Component {
  // SmtpJS.com

  sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm('gmail', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
      }, (error) => {
          console.log(error.text);
      });
  }

  render (){
  const {classes} = this.props;
    return (
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            id="outlined-password-input"
            label="Name"
            variant="outlined"
            name="name"
          />
        </div>
        <div>
          <TextField
            id="outlined-password-input"
            label="Email"
            variant="outlined"
            name="email"
          />
        </div>
        <div>
          <TextField
            id="outlined-password-input"
            label="Message"
            autoComplete="current-password"
            variant="outlined"
            name="message"
          />
        </div>
        <div>
          <Button
            className={classes.button}
            style={{
              border:'2px solid white',
              borderRadius:'0px',
              color:'white',
              margin:'10px',
              padding:'4px 14px',
              behavior:'smooth'}}>
              Submit
            </Button>
        </div>
      </form>
    );
  }
}

export default withStyles(styles)(FormPropsTextFields);