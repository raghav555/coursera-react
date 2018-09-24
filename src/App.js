import React, { Component } from 'react';
import './App.css';
import { Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';
import Main from './components/MainComponent';
import {DISHES} from './shared/dishes.js'

class App extends Component {

  render() {
      return(
        <div className="App">
          <Menu />
        </div>
      );
    }  
}

export default App;
