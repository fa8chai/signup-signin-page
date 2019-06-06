import React from 'react';
import './App.css';
import Signup from "./components/sign-up";
import Signin from "./components/sign-in";
import {
  BrowserRouter as Router,
 
  Route,
  Switch,
} from 'react-router-dom';

function App() {
  return (
    <div >
    <Router>
    <Switch>
        <Route exact path="/" component={Signup} />
        <Route path="/signin" component={Signin} />

    </Switch>
    
    
    
    </Router>
    </div>
  );
}

export default App;
