import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
})
let rect;

class ButtonAppBar extends React.Component {

  constructor(){
    super()
    this.state = {
      pos:"static"
    }
    this.handleScroll = this.handleScroll.bind(this)
  }
  componentDidMount(){
    console.log('LOOKK MOUNTED AGAIN')
    window.addEventListener('scroll', this.handleScroll);
    let bar = document.getElementById('appbar')
    rect =  bar.offsetTop;
  }

  handleScroll(){
    if (window.pageYOffset > rect) {
      this.setState({pos:"fixed"})
    } else {
      this.setState({pos:"static"})
    }
  }

  render() {
  const { classes } = this.props;
  return (
      <div className={classes.root}>
        <AppBar id='appbar' position={this.state.pos} style={{backgroundColor:'#304ffe'}}>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default withStyles(styles)(ButtonAppBar);