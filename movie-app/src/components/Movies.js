import React, { Component } from 'react';
import Movie from './Movie';

const Movies = (Props) => {
    return(
    <div className= "container">
        <div className= "row">
            <div className= "col s12">
                {
                    Props.movies.map((movie, i) => {
                        return (
                            <Movie key={i} id={movie.id} image={movie.poster_path}/>
                        )
                
                    })
                }
            </div>
        </div>
    </div>
    )}
export default Movies;