import React, { Component } from 'react';
import Header from './components/Header';
import Timeline from './components/Timeline';
import {Redirect} from 'react-router-dom';

class App extends Component {
  constructor(){
    super();
  }

  render() {
    return (
    <div id="root">
      <div className="main">
        <Header/>
        <Timeline login={this.props.match.params.login}/>
      </div>
    </div>
    );
  }
    
}




export default App;
