import React, { Component } from 'react';
import './App.css';

//Import React Router Module - The main thing we need is BrowserRouter
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';

class App extends Component {
  render() {
    //The Router holds everything it needs to control like a container
    return (
      <Router>
        <div className="App">
          {/* Use the Route component to set up a path match 
          If the path matches the browser path, it'll render whatever is given as a component prop 
          
          If you have a path by itself, it'll look for that path anywhere in that URL*/}
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
