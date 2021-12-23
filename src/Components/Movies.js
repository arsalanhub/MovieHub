import React, { Component } from "react";
import { movies } from "./getMovies.js";
import "./Movies.css";
import axios from 'axios';

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: "",
      parr: [1],
      curPage: 1,
      movies: [],
    };
  }
  async componentDidMount() {
    console.log(this.props.apiKey)
     const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.props.apiKey}&page=${this.state.curPage}`)
     let data = res.data
     this.setState({
        movies: [...data.results]
     })
  }
  render() {
    return (
      <>
        {this.state.movies.length === 0 ? (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div>
            <h3 className="text-center">
              <strong>Trending</strong>
            </h3>
            <div>
              <div className="container">
                <div className="row">
                  {this.state.movies.map((movieObj) => {
                    return (
                      // If we hover over the card then hover stores id of movie
                      <div
                        className="my-3 col-md-4"
                        onMouseEnter={() =>
                          this.setState({ hover: movieObj.id })
                        }
                        onMouseLeave={() => {
                          this.setState({ hover: "" });
                        }}
                      >
                        <div className="card" style={{ width: "18rem;" }}>
                          <img
                            src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}
                            className="card-img-top"
                            alt="..."
                          />
                          <div className="card-body">
                            <h5 className="card-title">
                              {movieObj.original_title}
                              <span className="badge bg-primary rating">
                                {movieObj.vote_average}
                              </span>
                            </h5>
                            <p className="card-text">
                              {movieObj.overview.substring(0, 100)}...
                            </p>
                            <div className="button-wrapper button-style">
                              {
                                //  if hover stores id of movie then display Add to favourite button
                                this.state.hover === movieObj.id && (
                                  <a href="/#" className="btn btn-primary">
                                    Add to Favourite
                                  </a>
                                )
                              }
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="/#">
                        Previous
                      </a>
                    </li>
                    {this.state.parr.map((value) => {
                      return <li className="page-item">
                        <a className="page-link" href="/#">
                          {value}
                        </a>
                      </li>;
                    })}
                    <li className="page-item">
                      <a className="page-link" href="/#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
