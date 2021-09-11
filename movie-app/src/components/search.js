import React, { Component } from 'react';

const Search = (Props) => 
{
    return(
        <div className="Container">
            <div className="row">
                <section className="col s4 offset-s4">
                    <form action="" onSubmit= {Props.handleSubmit}>
                        <div className="input-field">
                            <input placeholder="Search Movie" type="text" onChange={Props.handleChange}/>
                        </div>
                    </form>
                </section>
            </div>
        </div>                
    )}

export default Search;