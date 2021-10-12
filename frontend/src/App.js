import './App.css'
import NavBarOffCanvas from './components/NavBarOffCanvas';
import Home from './components/Home'
import SignIn from './components/SignIn'

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <div>
      <NavBarOffCanvas/>
    </div>
    <div>
        <Switch>
          <Route path="/signIn">
            <SignIn/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>          
    </div>
    </Router>
    </>
  );
}

export default App;
