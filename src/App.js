import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import store from './redux/reducers/index';
import './App.css';
import home from '../src/components/Home';
import Navbar from '../src/components/Navbar';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
      <div className="App">
      <Navbar/>
      <Switch>
      <Route exact path="/" component={home}/>
      </Switch>
      </div>
      
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
