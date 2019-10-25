import React, { Component } from 'react';
import './App.css';
import TextSection from '../components/TextSection/TextSection';
import TopMenu from '../components/TopMenu';
import Card from '../components/Card/Card';
import Particles from 'react-particles-js';
import linkedin from '../img/LinkedIn_logo.png';
import github from '../img/github.svg';
import quantlogo from '../img/quantopian-logo.png';

const AboutText = `I graduated from Penn State University in 2018 with a degree in
 Mechanical Engineering and I have worked for Lockheed Martin since then. My first 
 job at Lockheed was as a Software Systems Engineer. I quickly gained a passion for 
 Software, specifically Web Development. This site is not only to show what I know,
 but also to act as a playground for me to experiment with. Below you can see my 
 LinkedIn, Github, and Quantopian profiles. Quantopian is a python platform and
 library for creating, testing, and deploying financial trading algorithms`


const particleOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 750
      }
    }
  },
  interactivity: {
    events: {
        onhover: {
            enable: true,
            mode: "bubble"
        }
    },
    modes: {
        bubble: {
            size: 20,
            distance: 60
        }
    }
  }
}

class App extends Component {
  
  render() {
    return (
      <div>
        <Particles className='particles'
          params={particleOptions}/>
        <header>
          <div>
            <TopMenu />
          </div>
        </header>
        <TextSection title='About Me' text={AboutText} />
        <card-list>
          <Card media='LinkedIn' username='Ben Wallace' pic={linkedin} link='https://www.linkedin.com/in/ben-wallace-77bb9b9a/'/>
          <Card media='GitHub' username='benwallace15' pic={github} link='https://github.com/benwallace15'/>
          <Card media='Quantopian' username='Ben Wallace' pic={quantlogo} link='https://www.quantopian.com/users/5d33abdf04ee91003fac2d73'/>
        </card-list>
      </div>
    )
  }
}

export default App;
