import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from 'react';
export default function MovieDetails() {
    let { id } = useParams();
    const [movie, setMovies] = useState([]);
    let navigate = useNavigate();
    let url = "http://127.0.0.1:8000/movies/";
    let concatenatedUrl = `${url}${id}`;

    useEffect(() => {
        axios.get(concatenatedUrl).then((response) =>{
            setMovies(response.data);
        })
        
        }, [concatenatedUrl])
    //console.log(movie);

    return (
        <div>
        <h2>Movie Information</h2>
        <div>
            <ul>
                <li>Movie Title: {movie.title}</li>
                <li>Year: {movie.year}</li>
                <li>Running Time: {movie.time}</li>
                <li>Directed By: {movie.directors && movie.directors.length > 0 ? movie.directors[0].dir_fname + ' ' + movie.directors[0].dir_lname : 'N/A'}</li>
                <li>Starring By: {movie.cast && movie.cast.length > 0 ? `${movie.cast[0].role} - ${movie.cast[0].actor.act_fname} ${movie.cast[0].actor.act_lname}` : 'N/A'}</li>
                <li>Genre: {movie.genres && movie.genres.length > 0 ? movie.genres[0].gen_title : 'N/A'}</li>
                <li>Rating: {movie.ratings && movie.ratings.length > 0 ? movie.ratings[0].reviewer.rev_name : 'N/A'}</li>
                <li>Score: {movie.ratings && movie.ratings.length > 0 ? `${movie.ratings[0].rev_stars} stars` : 'N/A'}</li>
            </ul>
        </div>
        <button onClick={() => {
            navigate("/")
        }}>Go Back</button>
        </div>
    );
}