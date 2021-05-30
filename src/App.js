import './App.css';
import React from 'react';
import { Switch, BrowserRouter, Route } from "react-router-dom";

import Header from './components/Header';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import CreatePost from './components/CreatePost';
import ViewPost from './components/ViewPost';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={LandingPage} />
                        <Route exact path="/signin" component={Dashboard} />
                        <Route exact path="/dashboard" component={Dashboard} />
                        <Route exact path="/createpost" component={CreatePost} />
                        <Route exact path="/viewpost" component={ViewPost} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
