import React, { Component } from 'react';
import './App.css';
import TopMenu from '../components/TopMenu';

class App extends Component {
  //Routing is stored in the top menu, which is how the pages get rendered
  render() {
    return (
      <div>
        <TopMenu />
      </div>
    )
  }
}

export default App;
