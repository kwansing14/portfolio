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
    window.addEventListener('scroll', this.handleScroll);
    let bar = document.getElementById('appbar')
    rect =  bar.offsetTop;
  }

  handleScroll(){
    if (window.pageYOffset >= rect) {
      this.setState({pos:"fixed"})
    } else {
      this.setState({pos:"static"})
    }
  }
  homeClick(){
    console.log('click')
    let appbar = document.getElementById('introcontainer');
    appbar.scrollIntoView({behavior: 'smooth'});
  }
  projectClick(){
    console.log('click')
    let appbar = document.getElementById('projecttitle');
    appbar.scrollIntoView({behavior: 'smooth'});
  }

  render() {
  const { classes } = this.props;
  return (
      <div className={classes.root}>
        <AppBar id='appbar' position={this.state.pos} style={{backgroundColor:'#131313', borderBottom:'4px solid #2962FF'}}>

          <Toolbar>
            <Button onClick={()=>{this.homeClick()}} style={{color:'white'}}>
              Home
            </Button>
            &nbsp;
            <Button onClick={()=>{this.projectClick()}} style={{color:'white'}}>
              Projects
            </Button>
            &nbsp;
            </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default withStyles(styles)(ButtonAppBar);