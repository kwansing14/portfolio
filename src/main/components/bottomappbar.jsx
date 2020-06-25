import React from 'react';

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
      <div className={classes.root}>
      <AppBar
        position="static"
        style={{backgroundColor:'#131313'}}>
        <div style={{height:'100px'}}>
          <div>
            Contact Me
          </div>
        </div>
      </AppBar>
    </div>
    );
  }
}
export default withStyles(styles)(BottomAppBar);