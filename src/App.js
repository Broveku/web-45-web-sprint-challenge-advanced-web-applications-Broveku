import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BubblePage from "./components/BubblePage";
import PrivateRoute from "./components/PrivateRoute";

import Login from "./components/Login";
import axiosWithAuth from "./helpers/axiosWithAuth";
import "./styles.scss";

function App() {

  const handleLogout=()=>{
    axiosWithAuth()
      .post('http://localhost:5000/api/logout').then(res=>{
        localStorage.removeItem('token')
      })
      .catch(err=>{
        console.log(err)
      })
  }


  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
         
          <a data-testid="logoutButton" onClick={handleLogout} href="/login">logout</a>
        </header>
         
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/login' component={Login} />
          <PrivateRoute exact path='/protected' component={BubblePage} />
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Add in two routes that link to the Login Component, one for the default path '/' and one for the '/login'.
//2. Render BubblePage as a PrivateRoute
//2. Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page.