import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/header';
import Home from './components/home';
import Contact from './pages/contact';

function App() {
  return (
    <div className="App">
    <Header></Header>
      <Router>
        <Switch>
          <Route path = "/"> <Home> </Home> </Route>    
          <Route path = "/portofolioPage"></Route>
          <Route path = "/contact"><Contact></Contact></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
