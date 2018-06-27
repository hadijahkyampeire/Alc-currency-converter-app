import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import home from '../src/components/Home';
import Navbar from '../src/components/Navbar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Navbar/>
      <Switch>
      <Route exact path="/" component={home}/>
      </Switch>
      </div>
      
      </BrowserRouter>
    );
  }
}

export default App;
