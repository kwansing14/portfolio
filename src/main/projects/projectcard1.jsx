import React from 'react';
import RtModal from './modal/runtrackerdemo';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';



const styles = theme => ({
  root: {
    maxWidth: 345,
  },
});

class ProjectCard extends React.Component {
  handleOpen(){
    console.log('demo leh')
  }

  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
  const { classes } = this.props;
  return (
      <Card elevation={5} className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Run Tracker App"
            height="220px"
            image={process.env.PUBLIC_URL+"/runtrackerapp.png"}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Run Tracker App
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" style={{height:'140px'}}>
              A running app that tracks distance, pace, time, this app features the ability to display graphs with average distance and pace by comparing past running records, as well as displaying average pace for a single run.
            </Typography>
            <Typography variant="caption" color="textSecondary" style={{display:"flex"}}>
                &#123;  Ruby on Rails | ReactJS | ProgreSQL  &#125;
            </Typography>
          </CardContent>
        </CardActionArea>
        <Divider/>
        <CardActions style={{display:'flex', justifyContent:'space-around'}}>
          <RtModal/>
          <Button size="small" target='_blank' href='https://github.com/kwansing14/run-tracker' color="primary">
            Github
          </Button>
          <Button size="small" target='_blank' href='https://sei22-run-tracker.herokuapp.com/' color="primary">
            Heroku
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(ProjectCard);