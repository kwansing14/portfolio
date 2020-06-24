import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const styles = theme => ({
  root: {
    maxWidth: 345,
  },
});

class ProjectCard extends React.Component {

  render() {
  const { classes } = this.props;
  return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Run Tracker App"
            height="220px"
            image="./runtrackerapp.png"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Run Tracker App
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" style={{height:'120px'}}>
              A running app that tracks distance, pace, time, this app features the ability to display graphs with average distance and pace by comparing past running records, as well as displaying average pace for a single run.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Demo
          </Button>
          <Button size="small" color="primary">
            Github
          </Button>
          <Button size="small" color="primary">
            Heroku
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(ProjectCard);