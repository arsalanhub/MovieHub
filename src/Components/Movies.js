import React, { Component } from "react";
import "./Movies.css";
import axios from "axios";

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: "",
      parr: [1],
      curPage: 1,
      movies: [],
      favourites: [],
    };
  }
  async componentDidMount() {
    console.log(this.props.apiKey);
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${this.props.apiKey}&page=${this.state.curPage}`
    );
    let data = res.data;
    this.setState({
      movies: [...data.results],
    });
  }
  changeMovies = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${this.props.apiKey}&page=${this.state.curPage}`
    );
    let data = res.data;
    this.setState({
      movies: [...data.results],
    });
  };
  handleRight = () => {
    let temparr = [];
    for (let i = 1; i <= this.state.parr.length + 1; i++) temparr.push(i);
    this.setState(
      {
        parr: [...temparr],
        curPage: this.state.curPage + 1,
      },
      this.changeMovies
    );
  };
  handleLeft = () => {
    if (this.state.curPage !== 1) {
      let temparr = [];
      for (let i = 1; i <= this.state.parr.length - 1; i++) temparr.push(i);
      this.setState(
        {
          parr: [...temparr],
          curPage: this.state.curPage - 1,
        },
        this.changeMovies
      );
    }
  };
  handleClick = (value) => {
    if (value !== this.state.curPage) {
      this.setState(
        {
          curPage: value,
        },
        this.changeMovies
      );
    }
  };
  // This function contains logic for add to favourite button
  handleFavourites = (movie) => {
    let oldData = JSON.parse(localStorage.getItem("movies-app") || "[]");
    if (this.state.favourites.includes(movie.id)) {
      // if movie is already present in favourite then remove that movie
      oldData = oldData.filter((a) => a.id !== movie.id);
    } else {
      // If movie not present in favourite then push that movie
      oldData.push(movie);
    }
    localStorage.setItem("movies-app", JSON.stringify(oldData));
    console.log(oldData);
    this.handleFavouritesState();
  };
  handleFavouritesState = () => {
    let oldData = JSON.parse(localStorage.getItem("movies-app") || "[]");
    let temp = oldData.map((movie) => movie.id);
    this.setState({
      favourites: [...temp],
    });
  };
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
                        key={movieObj.id}
                      >
                        <div className="card" style={{ width: "18rem" }}>
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
                                  <a
                                    href="/#"
                                    className="btn btn-primary"
                                    onClick={() =>
                                      this.handleFavourites(movieObj)
                                    }
                                  >
                                    {this.state.favourites.includes(movieObj.id)
                                      ? "Remove from favourites"
                                      : "Add to favourites"}
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
                      <a
                        className="page-link"
                        href="/#"
                        onClick={this.handleLeft}
                      >
                        Previous
                      </a>
                    </li>
                    {this.state.parr.map((value, idx) => {
                      return (
                        <li className="page-item" key={idx}>
                          <a
                            className="page-link"
                            href="/#"
                            onClick={() => this.handleClick(value)}
                          >
                            {value}
                          </a>
                        </li>
                      );
                    })}
                    <li className="page-item">
                      <a
                        className="page-link"
                        href="/#"
                        onClick={this.handleRight}
                      >
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
