import React from 'react';
import ProjectCard1 from './projects/projectcard1';
import ProjectCard2 from './projects/projectcard2';
import ProjectCard3 from './projects/projectcard3';
import {Grid, Container} from '@material-ui/core/';

let rect;

class Project extends React.Component {
  constructor(){
    super()
    this.state = {
      padding:{paddingTop:'0px'},
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll(){
    if (window.pageYOffset >= rect) {
      this.setState({padding:{paddingTop:'64px'}})
    } else {
      this.setState({padding:{paddingTop:'0px'}})
    }
  }
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
    let bar = document.getElementById('appbar')
    rect =  bar.offsetTop;
  }

  render(){
    return (
      <Container id='projecttitle' fixed style={this.state.padding}>
        <Grid container justify='center' style={{margin:'10px 0'}} spacing={2}>
          <Grid item xs={12} container justify="center">
            <div className='projecttitle'>Projects</div>
          </Grid>
          <Grid  container justify='center' item sm={12} md={4}>
            <ProjectCard1/>
          </Grid>
          <Grid  container justify='center' item sm={12} md={4}>
            <ProjectCard2/>
          </Grid>
          <Grid  container justify='center' item sm={12} md={4}>
            <ProjectCard3/>
          </Grid>

        </Grid>
      </Container>
    );
  }
}

export default Project;