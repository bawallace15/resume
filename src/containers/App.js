import React, { Component } from 'react';
import './App.css';
import TextSection from '../components/TextSection';
import TopMenu from '../components/TopMenu';

class App extends Component {

  render() {
    return (
      <div>
        <header>
          <div>
            <TopMenu />
          </div>
        </header>
        <TextSection title='About Me' text='sample text' />
      </div>
    )
  }
}

export default App;
