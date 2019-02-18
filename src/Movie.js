import React, { Component } from 'react';
import axios from 'axios';

class Movie extends Component{
	constructor(){
		super();
		this.state = {
			movie: {}
		}
	}

	componentWillReceiveProps(newProps){
		console.log(newProps);
		const mid = newProps.match.params.movieId;
		axios.get(`https://api.themoviedb.org/3/movie/${mid}?api_key=fec8b5ab27b292a68294261bb21b04a5`)
		.then((movieData)=>{
			console.log(movieData);
			this.setState({
				movie: movieData.data
			})
		})
	}

	componentDidMount(){
		const mid = this.props.match.params.movieId;
		axios.get(`https://api.themoviedb.org/3/movie/${mid}?api_key=fec8b5ab27b292a68294261bb21b04a5`)
		.then((movieData)=>{
			console.log(movieData);
			this.setState({
				movie: movieData.data
			})
		})
	}

	render(){
        /* React Router adds these props:
        match = params/wildcard
        history = all past history of react-router
        location = same as match but w/o bulk and with key */

        console.log(this.props.match);
		if(this.state.movie.title === undefined){
			return(
				<h1>Loading...</h1>
			)
		}
		var movie = this.state.movie;
		return(
			<div className="movie-container">
				<img src={`http://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
				<div className="movie-info">
                    <h3>{movie.title}</h3>
                    <div>${movie.budget}</div>
                    <i>{movie.tagline}</i>
                </div>
			</div>
		)
	}
}

export default Movie;