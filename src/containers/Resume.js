import React, { Component } from 'react';
import './Resume.css';
import ResumeSection from '../components/ResumeSection/ResumeSection';
import TechCard from '../components/TechCard/TechCard';

import LMlogo from '../img/Lockheed-martin-logo.png';
import jslogo from '../img/javascript.png';
import reactlogo from '../img/react.png';
import nodelogo from '../img/nodejs-logo.png';
import pythonlogo from '../img/python.png';
import k8slogo from '../img/kubernetes.png';
import dockerlogo from '../img/docker-logo.png';

const sys = ['Led project to develop a python 600+ line script to troubleshoot typical issues with development deployments', 
'Created automated test to gain insights on performance variation over time and on different environments',
'Improved and documented the procedure for transferring software from development to test environment',
'Led new process development for distributing patches that reduced deployment from 2 hours to less than 30 min',
'Received 6 internal recognition awards from peers and supervisors for work on two separate projects',
'Developed automated User Interface tests to replace manual procedures',
'Automated documentation of system architecture using Enterprise Architect and Microsoft Office API',
'Debugged system errors and inconsistencies in order to determine root causes',
'Edited process and code configurations to apply systems in offline environments']

const qa = ['Established Agile team for an internal site and tool redesign project',
'Scoped work and created project schedule for internal site and tool redesign project',
'Currently project lead for internal site and tool redesign project',
'Successfully created python script that pulls and organizes data to produce key metrics for a poorly performing process to track improvement effectiveness',
'Investigating root cause behind process issues that cause about $1.1M in reprocessing per year',
'Orchastrated acquisition of equipment that could decrease reprocessing']

class App extends Component {

  render() {
    return (
      <resume>
        <ResumeSection logo={LMlogo} company='Lockheed Martin' title='Systems Engineer (6/2018-7/2019)' accomp={sys} />
        <ResumeSection logo={LMlogo} company='Lockheed Martin' title='Quality Engineer (7/2019-CURRENT)' accomp={qa} />
        <h1 className='resume-title'>Technical Skills</h1>
        <div className='container'>
          <TechCard pic={jslogo}/>
          <TechCard pic={reactlogo}/>
          <TechCard pic={nodelogo}/>
          <TechCard pic={pythonlogo}/>
          <TechCard pic={k8slogo}/>
          <TechCard pic={dockerlogo}/>
        </div>
      </resume>
    )
  }
}

export default App;