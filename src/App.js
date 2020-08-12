import React from 'react';
import logo from './logo.svg';
import { Header } from 'semantic-ui-react';
import { Form } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
import { Segment } from 'semantic-ui-react';

import {
 BrowserRouter as Router,
 Switch,
 Route,
} from "react-router-dom";
import Home from './Home';
import Register from './Register';


import './App.css';

function App() {
  return (
    <Router basename='/web'>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/Register'>
          <Register/>
        </Route>
      </Switch>
    </Router>
  );
 }
 

export default App;
