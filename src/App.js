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
        <Route  path="/dashboard" component={Dashboard}></Route>
        <Route  path="/about" component={About}></Route>
        <Route  path="/skills" component={Skills}></Route>
        <Route  path="/workhistory" component={Work}></Route>
        <Route  path="/portfolio" component={Portfolio}></Route>
        <Route  path="/hobbies" component={Hobbies}></Route>
        <Route  path="/extra" component={Extra}></Route>
        <Route  path="/" component={Home}></Route>
        
      </Switch>
    
    </Router>
  );
}
