import React, { Component } from 'react';
import Nav from "./nav";
import Search from "./search";
import Movies from "./Movies";

class App extends Component {

  constructor(){
    super()
    this.state = {
      movies: [],
      searchTerm: '',
      currentMovie: null,
      idmb_id: ''

    }
    this.apiKey = process.env.REACT_APP_API 
  }

  handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=1e448e0dfcdbb565f5d329820065b4d2&query=${this.state.searchTerm}`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      this.setState({movies: [...data.results]})
    })
  }
  
  handleChange = (e) => {
  this.setState({ searchTerm: e.target.value })
  }

  render(){
    return(
      <div className="App">
      <Nav />
      <Search handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
      <Movies movies={this.state.movies}/>
      </div>
    );
  }
}

export default App;
