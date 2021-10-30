import react from "react";
import { ReactPropTypes } from "react";

function Movie({title,year,summary,poster,genres}) {
    return (
    <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
            <h3 className="movie__title">{titel}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className="movie__genres">
                {genres.map((genre) => {
                    return <li className="movie__genre">{genre}</li>;
                })}
            </ul>
            <p className="movie__summary">{summary}</p>
        </div>
    </div>
    );
}
Movie.PropTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arry0f(PropTypes.string).isRequired
};

export default Movie;