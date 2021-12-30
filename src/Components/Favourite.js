import React, { Component } from "react";
import { movies } from "./getMovies";
import "./Favourite.css";

export default class Favourite extends Component {
  render() {
    const movie = movies.results;
    let genreids = {28:'Action',12:'Adventure',16:'Animation',35:'Comedy',80:'Crime',99:'Documentary',18:'Drama',10751:'Family',14:'Fantasy',36:'History',
                        27:'Horror',10402:'Music',9648:'Mystery',10749:'Romance',878:'Sci-Fi',10770:'TV',53:'Thriller',10752:'War',37:'Western'};
    return (
      <div>
        <>
          <div className="main">
            <div className="row">
              <div className="col-3">
                <ul className="list-group favourites-genres">
                  <li className="list-group-item">All Genres</li>
                  <li className="list-group-item">Action</li>
                  <li className="list-group-item">Comedy</li>
                  <li className="list-group-item">A fourth item</li>
                  <li className="list-group-item">And a fifth one</li>
                </ul>
              </div>
              <div className="col-9 favourites-table">
                <div className="row">
                  <input type="text" className="input-group-text col" placeholder="Search"/>
                  <input type="number" className="input-group-text col mx-3" />
                </div>
                <div className="row my-5">
                  <table className="table table-striped table-hover">
                    <thead>
                      <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Genere</th>
                        <th scope="col">Popularity</th>
                        <th scope="col">Rating</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {movie.map((movieObj) => {
                        return <tr>
                          <th scope="row">
                            <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} style={{width: '5rem'}}/>
                            <span className="mx-2">{movieObj.original_title}</span>
                          </th>
                          <td>{genreids[movieObj.genre_ids[0]]}</td>
                          <td>{movieObj.popularity}</td>
                          <td>{movieObj.vote_average}</td>
                          <td><button type="button" class="btn btn-outline-info">Delete</button></td>
                        </tr>;
                      })}
                    </tbody>
                  </table>
                </div>
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        Previous
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </>
      </div>
    );
  }
}
