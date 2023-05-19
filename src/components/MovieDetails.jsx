import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';

export default function MovieDetails({data}) {
    let { id } = useParams();
    const movie = data.find((movie) => movie.mov_id === id);
    let navigate = useNavigate();
    return (
        <div>
        <h2>Movie Information</h2>
        <div>
            <ul>
                <li>Movie Title: {movie.mov_title}</li>
                <li>Year: {movie.mov_year}</li>
                <li>Running Time: {movie.mov_time}</li>
                {/* <li>Directed By: {movie.director}</li> */}
                {/* <li>Starring: {movie.starring}</li> */}
                {/* <li>Genre: {movie.genre}</li>
                <li>Rating: {movie.rating}</li>
                <li>Score: {movie.score}</li> */}
            </ul>
        </div>
        <button onClick={() => {
            navigate("/")
        }}>Go Back</button>
        </div>
    );
}

MovieDetails.propTypes = {
    data: PropTypes.array.isRequired,
};