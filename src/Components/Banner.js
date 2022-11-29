import { movies } from "./getMovies";
import React, { Component } from "react";
import axios from "axios";
import "./Banner.css";

export default class Banner extends Component {
  constructor() {
    super()
    this.state = {
      movie: "",
    };
  }
  async componentDidMount() {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=7a61c0147be111ba77532bba554aabf9"
    );
    let data = res.data.results;
    console.log(data[0])
    this.setState({ movie: data[0] });
  }
  render() {
    return (
      <>
        {this.state.movie === "" ? (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div className="card banner-card">
            <img
              src={`https://image.tmdb.org/t/p/original/${this.state.movie.backdrop_path}`}
              alt={this.state.movie.title}
              className="card-img-top banner-img"
            />
            <h1 className="card-title banner-title">{this.state.movie.original_title}</h1>
            <p className="card-text banner-text">{this.state.movie.overview}</p>
          </div>
        )}
      </>
    );
  }
}
