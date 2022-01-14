import React, { Component } from "react";
import { movies } from "./getMovies";
import "./Favourite.css";

export default class Favourite extends Component {
  constructor() {
    super();
     this.state = {
        genres: [],
        curgen: 'All Genres',
        movies: []
     }
  }
  componentDidMount() {
    let genreids = {28:'Action',12:'Adventure',16:'Animation',35:'Comedy',80:'Crime',99:'Documentary',18:'Drama',10751:'Family',14:'Fantasy',36:'History',
                        27:'Horror',10402:'Music',9648:'Mystery',10749:'Romance',878:'Sci-Fi',10770:'TV',53:'Thriller',10752:'War',37:'Western'};
    let data = JSON.parse(localStorage.getItem("movies-app" || "[]"))
    let temp = []
    data.forEach((movieObj)=>{
      // If genre id of any movie not there in temp array 
      // then we push it in temp array
      // temp array will store all genres
      if(!temp.includes(genreids[movieObj.genre_ids[0]])) 
          temp.push(genreids[movieObj.genre_ids[0]])
   })
   // unshift stores value in begnning instead of end 
   // unshift is opposite of push_back
   temp.unshift('All Genres')
   this.setState({
     genres: [...temp],
     movies: [...data]
   })
  }
  handlegenresChange = (genre) => {
     this.setState({
       curgen: genre
     })
  } 
  render() {
    let genreids = {28:'Action',12:'Adventure',16:'Animation',35:'Comedy',80:'Crime',99:'Documentary',18:'Drama',10751:'Family',14:'Fantasy',36:'History',
                        27:'Horror',10402:'Music',9648:'Mystery',10749:'Romance',878:'Sci-Fi',10770:'TV',53:'Thriller',10752:'War',37:'Western'};
    return (
      <div>
        <>
          <div className="main">
            <div className="row">
              <div className="col-3">
                <ul className="list-group favourites-genres">
                  {
                     this.state.genres.map((genre, idx)=>{
                        if(this.state.curgen === genre)
                           return <li className="list-group-item" style={{background: '#0B5ED7', color: 'white', fontWeight: 'bold'}} key={idx}>{genre}</li>
                        else    
                           return <li className="list-group-item" style={{background: 'white', color: '#0B5ED7', fontWeight: 'bold'}} onClick={() => this.handlegenresChange(genre)} key={idx}>{genre}</li>
                     })
                  }
                </ul>
              </div>
              <div className="col-9 favourites-table">
                <div className="row">
                  <input type="text" className="input-group-text col" placeholder="Search"/>
                  <input type="number" className="input-group-text col mx-3" placeholder="Rows Count"/>
                </div>
                <div className="row my-5">
                  <table className="table table-striped table-hover">
                    <thead>
                      <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Popularity</th>
                        <th scope="col">Rating</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.movies.map((movieObj) => {
                        return <tr key={movieObj.id}>
                          <th scope="row">
                            <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} alt="" style={{width: '5rem'}}/>
                            <span className="mx-2">{movieObj.original_title}</span>
                          </th>
                          <td>{genreids[movieObj.genre_ids[0]]}</td>
                          <td>{movieObj.popularity}</td>
                          <td>{movieObj.vote_average}</td>
                          <td><button type="button" className="btn btn-outline-info">Delete</button></td>
                        </tr>;
                      })}
                    </tbody>
                  </table>
                </div>
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="/#">
                        Previous
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="/#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="/#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="/#">
                        3
                      </a>
                    </li>
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
        </>
      </div>
    );
  }
}

