import React, { Component } from 'react'
import { movies } from './getMovies'

export default class Banner extends Component {
    render() {
        let movie = movies.results[0]
        return (
            <>
                {
                    movie == '' ?
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div> :
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="my-3">
                                        <div className="card banner-card" style={{ width: "18rem" }}>
                                            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title banner-title">{movie.original_title} | {movie.vote_average}</h5>
                                                <p className="card-text">{movie.overview}</p>
                                                <a href="#" className="btn btn-primary">Go somewhere</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="my-3">
                                        <div className="card banner-card" style={{ width: "18rem" }}>
                                            <img src={`https://image.tmdb.org/t/p/original${movies.results[1].backdrop_path}`} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{movies.results[1].original_title} | {movies.results[1].vote_average}</h5>
                                                <p className="card-text">{movies.results[1].overview}</p>
                                                <a href="#" className="btn btn-primary">Go somewhere</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
            </>
        )
    }
}
