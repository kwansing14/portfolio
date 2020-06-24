import React from 'react';
import ProjectCard1 from './components/projectcard1';
import ProjectCard2 from './components/projectcard2';
import ProjectCard3 from './components/projectcard3';


import {Grid, Container} from '@material-ui/core/';

class Project extends React.Component {

  render(){
    return (
      <Container fixed>
        <Grid container style={{margin:'10px 0'}} spacing={2}>
          <Grid item xs={12} container justify="center">
            <div className='projecttitle'>Projects</div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <ProjectCard1/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <ProjectCard2/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <ProjectCard3/>
          </Grid>

        </Grid>
      </Container>
    );
  }
}

export default Project;