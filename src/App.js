import React, { Component } from 'react';
import './App.css';

//Import React Router Module - The main thing we need is BrowserRouter
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import MovieList from './MovieList';
import Movie from './Movie';

class App extends Component {
  render() {
    const superHero = "She-Hulk";

    //The Router holds everything it needs to control like a container
    return (
      <Router>
        <div className="App">
          {/* Don't use <a> tags in React Router! Use link components!*/}
          <div className="navbar">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/movies">Movies</Link>
          </div>

          {/*Use the Route component to set up a path match 
          If the path matches the browser path, it'll render whatever is given as a component prop 
          
          If you have a path by itself, it'll look for that path anywhere in that URL
          So you'll need to put exact into the Route tag to remedy that */}
          <Route exact path="/" render={()=>{
           return (<Home superHero={superHero}/>)
          }} />
          <Route path="/about" component={About} />
          <Route exact path="/movies" component={MovieList} />
          <Route path="/movies/:movieId" component={Movie} />
        </div>
      </Router>
    );
  }
}

export default App;
