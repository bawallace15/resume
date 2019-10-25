import React, { Component } from 'react';
import './App.css';
import './Resume.css';
import TopMenu from '../components/TopMenu';
import ResumeSection from '../components/ResumeSection';

class App extends Component {

  render() {
    return (
      <div>
        <header>
          <div>
            <TopMenu />
          </div>
        </header>
        <ResumeSection title='Full-Time Experience' text='Lockheed Martin'/>
      </div>
    )
  }
}

export default App;