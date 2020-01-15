import React from 'react';
import {Helmet} from 'react-helmet'
import Card from '../components/Card/Card';
import TextSection from '../components/TextSection/TextSection';
import './Home.css';

import linkedin from '../img/LinkedIn_logo.png';
import github from '../img/github.svg';
import quantlogo from '../img/quantopian-logo.png';

import Particles from 'react-particles-js';

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

const AboutText = `I graduated from Penn State University in 2018 with a degree in
 Mechanical Engineering and I have worked for Lockheed Martin since then. My first 
 job at Lockheed was as a Software Systems Engineer. I quickly gained a passion for 
 Software, specifically Web Development. This site is not only to show what I know,
 but also to act as a playground for me to experiment with. Below you can see my 
 LinkedIn, Github, and Quantopian profiles. Quantopian is a python platform and
 library for creating, testing, and deploying financial trading algorithms. I have
 experimented with Quantopian and have made a few basic (terrible) algorithms, but 
 have yet to deploy an algorithm that trades real money.`

const home = () => {
    return (
        <div className='home'>
          <Helmet>
            <title>Ben's Home Page</title>
          </Helmet>
          <Particles className='particles'
              params={particleOptions}/>
          <TextSection title='About Me' text={AboutText} />
          <cardlist className='card-container'>
              <Card media='LinkedIn' username='Ben Wallace' pic={linkedin} link='https://www.linkedin.com/in/ben-wallace-77bb9b9a/'/>
              <Card media='GitHub' username='benwallace15' pic={github} link='https://github.com/benwallace15'/>
              <Card media='Quantopian' username='Ben Wallace' pic={quantlogo} link='https://www.quantopian.com/users/5d33abdf04ee91003fac2d73'/>
          </cardlist>
        </div>
    )
}

export default home;