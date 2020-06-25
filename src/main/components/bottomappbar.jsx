import React from 'react';
import InputField from './inputfield';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu'

const styles = theme => ({
  root: {
    flexGrow: 1,
  }
})

class BottomAppBar extends React.Component {
  render () {
  const { classes } = this.props;

    return (
      <div className={classes.root} style={{borderTop:'4px solid #2962FF'}}>
      <AppBar
        position="static"
        style={{backgroundColor:'#131313'}}>
        <div style={{height:'300px'}}>
          <div style={{display:'flex',justifyContent:'center',margin:'10px'}}>
            <div style={{padding:'10px', borderBottom:'2px solid white',width:'100px'}}>
            Contact Me
            </div>
          </div>
          <div>
            <InputField/>
          </div>
        </div>
      </AppBar>
    </div>
    );
  }
}
export default withStyles(styles)(BottomAppBar);