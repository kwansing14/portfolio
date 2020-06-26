import React from 'react';
import Intro from './intro';
import Projects from './projects';
import Particles from 'react-particles-js';
import Appbar from './components/appbar';
import BottomAppbar from './components/bottomappbar';


class Main extends React.Component {
    myRef = React.createRef();

    render(){
    return (
      <div>
        <Particles params={{
                "particles": {
                    "number": {"value": 14},
                    "size": {"value": 2},
                    "links": {"opacity": 0}
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "grab"
                        },
                    "grab":{
                        "distance":0
                      }
                    }
                }
            }}
            style={{position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%"}}/>
        <Intro/>
        <Appbar ref={this.myRef}  />
        <Projects/>
        <BottomAppbar/>
      </div>
    );
  }
}

export default Main;