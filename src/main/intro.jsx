import React from 'react';
import {Button, Grid} from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  button: {
    backgroundColor: "",
    "&:hover": {
      backgroundColor: "white",
      color:'black !important'
    }
  }
})

class Intro extends React.Component {
  handleClick(){
    console.log("checl")
    let appbar = document.getElementById('appbar');
    appbar.scrollIntoView({behavior: 'smooth'});
  }
  componentDidMount(){
    console.log('mounted!')
  }
  render() {
    const { classes } = this.props;
    return (
      <Grid container
        direction="row"
        justify="center"
        alignItems="center"
        style={{backgroundColor:'#212121',height:'100vh'}}>
        <div className='introfont' >
          <div>My name is <span style={{color:'#2962ff'}}><b>Kwan Sing</b></span>.</div>
          <div>I'm a full-stack developer.</div>
            <Button
            className={classes.button}
            onClick={()=>{this.handleClick()}}
            style={{
              border:'2px solid white',
              borderRadius:'0px',
              color:'white',
              margin:'10px',
              padding:'4px 14px',
              behavior:'smooth'}}>
              View my projects
            </Button>
        </div>
      </Grid>
    );
  }
}

export default withStyles(styles)(Intro);