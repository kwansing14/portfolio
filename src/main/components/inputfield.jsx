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
  constructor(){
    super()
    this.state = {
      nameValue:'',
      emailValue:'',
      msgValue:'',
      nameStyle:{display:'none'},
      emailStyle:{display:'none'},
      msgStyle:{display:'none'},
      successStyle:{display:'none'}
    }
    this.nameChange = this.nameChange.bind(this)
    this.emailChange = this.emailChange.bind(this)
    this.msgChange = this.msgChange.bind(this)
  }
  nameChange(e) {
    console.log(e.target.value)
    this.setState({
        nameValue: e.target.value
    })
  }
  emailChange(e) {
    console.log(e.target.value)
    this.setState({
        emailValue: e.target.value
    })
  }
  msgChange(e) {
    console.log(e.target.value)
    this.setState({
        msgValue: e.target.value
    })
  }
  sendEmail(e) {
    e.preventDefault();
    console.log(e.target)
      if(this.state.nameValue === '') {
        console.log('name is empty')
        this.setState({
          nameStyle:{display:'block'},
          emailStyle:{display:'none'},
          msgStyle:{display:'none'}
        })
      } else if (this.state.emailValue === '') {
        console.log('email is empty')
        this.setState({
          nameStyle:{display:'none'},
          emailStyle:{display:'block'},
          msgStyle:{display:'none'}

        })
      } else if (this.state.msgValue === '' ) {
        console.log('msg is empty')
        this.setState({
          nameStyle:{display:'none'},
          emailStyle:{display:'none'},
          msgStyle:{display:'block'}
        })
      } else {
      emailjs.sendForm('gmail', 'kwansing_s_portfolio', e.target, 'user_gdRooiZyuQdafXReVGm1l')
      .then((result) => {
          this.setState({
            nameValue:'',
            emailValue:'',
            msgValue:'',
            nameStyle:{display:'none'},
            emailStyle:{display:'none'},
            msgStyle:{display:'none'},
            successStyle:{display:'block'}
          })
      }, (error) => {
          console.log(error.text);
      });
      }
  }

  render (){
  const {classes} = this.props;
    return (
      <div>
      <form id='mailform'
            className={classes.root}
            noValidate
            autoComplete="off"
            onSubmit={(e)=>{this.sendEmail(e)}}>
        <div>
          <TextField
            id='name'
            label="Name"
            variant="outlined"
            type="text"
            name="name"
            value={this.state.nameValue}
            onChange={(e)=>{this.nameChange(e)}}
          />
        </div>
        <div>
          <TextField
            id='email'
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            value={this.state.emailValue}
            onChange={(e)=>{this.emailChange(e)}}
          />
        </div>
        <div>
          <TextField
            id='msg'
            label="Message"
            multiline
            variant="outlined"
            type="text"
            name="message"
            value={this.state.msgValue}
            onChange={(e)=>{this.msgChange(e)}}
          />
        </div>
        <div style={this.state.nameStyle}>
          Please enter your name.
        </div>
        <div style={this.state.emailStyle}>
          Please enter your email.
        </div>
        <div style={this.state.msgStyle}>
          Message section is empty.
        </div>
        <div style={this.state.successStyle}>
          Your message is sent successfully.
        </div>
        <div>
          <Button
            className={classes.button}
            type="submit"
            value="Send"
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
    </div>
    );
  }
}

export default withStyles(styles)(FormPropsTextFields);