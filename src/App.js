import './App.css';
import React from 'react';
import { Switch, BrowserRouter, Route } from "react-router-dom";

import Header from './components/Header';
import LandingPage from './components/LandingPage';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
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
