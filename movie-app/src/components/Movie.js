import React, { Component } from 'react';

const Movie = (Props) => {
 
    function comingSoon(){
        alert("Coming Soon");
    }
    return(
    <div className="col s12 m6 l3">
        <div className="card">
            <div className="card-image waves-effect waves-block waves-light m-10">
                {
                Props.image == null ? <img src={""} alt="card" style={{width: "100%", height: 360}} /> : <img src={`http://image.tmdb.org/t/p/w185${Props.image}`} alt="card" style={{width: "100%", height: 360} } />      
                }
                {
                Props.id == null ? <p> No id </p> : <p>this is the TMDB-ID:{ Props.id}</p>
                }
            </div>
            <div className="card-content">
               <a class="waves-effect waves-light btn" onClick={comingSoon}>read more</a>
            </div>
        </div>
    </div>
    )
    
}
//onClick={() => movieID(Props.movieid)}
export default Movie;