import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {ratingContract} from "./EthereumSetup";
import {showMovies} from "./ShowMovies";

class App extends Component {
  constructor (props){
    super (props)
    this.state={
      movies: [{'Seperation, rating:0'}, {name: 'Tokyo Godfathers', rating:0}, {name:'The Seventh Seal',rating:0
      }]
    }
    this.handleVoting=this.handleVoting.bind(this)
  }

handleVoting(movie) {
  ratingContract.voteForMovie(movie)
  let votes=ratingContract.totalVotesFor(movie).toNumber()
  this.setState({movies:this.state.movies.map(
    (el)=>el.name===movie? Object.assign({},el,{rating:votes}):el
  )})
}

render() {
  return (
    <div className="App">
    <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title"> Welcome to Ethereum. The Future. </h1>
    </header>
    <p className ="App-intro">
    Favorite Movies App in Ethereum and React!</p>
    <div className="movie-table">
    <ShowMovies movies={this.state.movies} vote={this.handleVoting}/>
    </div>
    </div>
;
