import React, { Component } from 'react'
import { movies } from './getMovies.js'

export default class Movies extends Component {
    render() {
        let movie = movies.results
        return (
            <>
                {
                    movie.length === 0 ?
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div> :
                        <div>
                            <h3 className='text-center'><strong>Trending</strong></h3>
                            <div>
                                <div className="container">
                                    <div className="row">
                                        {movie.map((movieObj) => {
                                            return <div className="my-3 col-md-4">
                                                <div className="card" style={{ width: "18rem;" }}>
                                                    <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} className="card-img-top" alt="..." />
                                                    <div className="card-body">
                                                        <h5 className="card-title">{movieObj.original_title} <span class="badge bg-secondary">{movieObj.vote_average}</span></h5>
                                                        <p className="card-text">{movieObj.overview}</p>
                                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                                    </div>
                                                </div>
                                            </div>
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                }
            </>
        )
    }
}
