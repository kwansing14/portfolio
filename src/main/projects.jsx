import React from 'react';
import ProjectCard1 from './projects/projectcard1';
import ProjectCard2 from './projects/projectcard2';
import ProjectCard3 from './projects/projectcard3';


import {Grid, Container} from '@material-ui/core/';

class Project extends React.Component {

  render(){
    return (
      <Container fixed>
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