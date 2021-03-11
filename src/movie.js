import React from 'react'
import propTypes from 'prop-types'
import './movie.css'

function movie({id, title, year, summary, rating, cover, genres}){
    return (
        <div className="movie">
            <h3 className="title">{title}</h3>
            <img className="movie_" src={cover} alt={title} />
            <pre>{year}</pre>
            <ul>{genres.map((data,id) =>(
                <li key={id}>{data}</li>
            ))}</ul>
            <div>
                {summary}
            </div>
        </div>
    
        )
}

movie.propTypes = {
    id:propTypes.number,
    title:propTypes.string,
    year:propTypes.number,
    summary:propTypes.string,
    rating:propTypes.number,
    cover:propTypes.string
};

export default movie;