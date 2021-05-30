import './App.css';
import React from 'react';
import { Switch, BrowserRouter, Route } from "react-router-dom";
import CeramicClient from '@ceramicnetwork/http-client'

import Header from './components/Header';
import LandingPage from './components/LandingPage';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';

class App extends React.Component {
  constructor() {
    super();

    // Create ceramic client - Testnet URL
    this.ceramic = new CeramicClient("https://ceramic-clay.3boxlabs.com");
    this.loggedIn = false;
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header isAuth={this.loggedIn} />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/signin" component={SignIn} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
