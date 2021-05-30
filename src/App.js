import './App.css';
import {useState} from 'react'
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import SignIn from './components/SignIn';

function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token"));
  return (
    <BrowserRouter>
      <div>
        <Header isAuth={loggedIn}/>
        <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/signin" component={SignIn} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;