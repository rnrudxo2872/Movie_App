import React from 'react'
import propTypes from 'prop-types'
import './movie.css'
import {Link} from 'react-router-dom'

function movie({id, title, year, summary, rating, cover, genres}){
    return (
        <Link to={{
            pathname:`/movie_detail/${id}`,
            state:{
                title,
                year,
                summary,
                rating,
                cover, 
                genres
            }
        }}>
            <div className="movie">
                <h3 className="title">{title}</h3>
                <div className="movie_">
                    <div>
                        <img  src={cover} alt={title} />
                        <pre>{year}</pre>
                        <ul className="genres">{genres.map((data,id) =>(
                            <li key={id}>{data}</li>
                        ))}</ul>
                    </div>
                    <div className="summary">
                        {summary.slice(0,300)}...
                    </div>
                </div>
            </div>
        </Link>
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