import React, { Component } from "react";
import { movies } from "./getMovies.js";
import "./Movies.css";

export default class Movies extends Component {
  constructor() {
    super();
    this.state = {
      hover: "",
    };
  }
  render() {
    let movie = movies.results;
    return (
      <>
        {movie.length === 0 ? (
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
                  {movie.map((movieObj) => {
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
                              <span class="badge bg-primary rating">
                                {movieObj.vote_average}
                              </span>
                            </h5>
                            <p className="card-text">
                              {movieObj.overview.substring(0, 100)}...
                            </p>
                            <div className="button-wrapper button-style">
                              {
                                //  if hover stores id of movie then display Add to favourite button
                                this.state.hover == movieObj.id && (
                                  <a className="btn btn-primary">
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
                  <ul class="pagination">
                    <li class="page-item">
                      <a class="page-link" href="#">
                        Previous
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
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
