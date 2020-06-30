import React from "react";
import "./App.css";
import Home from "./components/Home";
import Extra from './components/Pages/Extra'
import Skills from './components/Pages/Skills'
import Work from './components/Pages/Work'
import About from './components/Pages/About'
import Portfolio from './components/Pages/Portfolio'
import Hobbies from './components/Pages/Hobbies'
import Dashboard from './components/Dashboard'
import ParticleComponent from "./components/ParticleComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <ParticleComponent />
      <Switch>
        <Route path="/dashboard" exact component={Dashboard}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route path="/skills" exact component={Skills}></Route>
        <Route path="/workhistory" exact component={Work}></Route>
        <Route path="/portfolio" exact component={Portfolio}></Route>
        <Route path="/hobbies" exact component={Hobbies}></Route>
        <Route path="/extra" exact component={Extra}></Route>
        <Route path="/" exact component={Home}></Route>
        
      </Switch>
    
    </Router>
  );
}
