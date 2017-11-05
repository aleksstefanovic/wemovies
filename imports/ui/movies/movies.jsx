import React, {
    Component
} from 'react';
import theMovieDBConfig from '../../api/config.js';
import MoviePoster from '../../components/moviePoster.jsx';
import Movie from './movie.jsx';
import style from './movie.css'

export default class Movies extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
        }
    }

    componentDidMount() {
        var movies = [];

        Meteor.call('getPopularMovies', (error, result) => {
            if (!error && result.statusCode == '200') {
                var content = JSON.parse(result.content);
                movies = content.results;

                for (var i=0; i < movies.length; i++) {
                    movies[i].fullPosterUrl = theMovieDBConfig.image_url + movies[i].poster_path;
                }

                this.setState({
                    movies: movies
                });
            }
        });
    }

    getMovieId (url) {
        var movieId = null;

        movieId = url.split("/")[4];
        return movieId;
    }

    render() {
        Session.set ("url", window.location.href);
        var movieId = this.getMovieId (window.location.href);
        
        if (movieId) {
            return (
                <Movie id={movieId} key={movieId} />
            );
        }
        else {
            return (
                <div>
                    {this.renderMoviePosters ()}
                </div>
            );
        }
    }

    renderMoviePosters () {
        if (this.state.movies.length === 0){
            return (
                    <div></div>
                );
        } 
        else {
        return this.state.movies.map((movie) => (
            <MoviePoster id={movie.id} key={movie.id} moviePoster={movie} />
        ))}; 
    }

}
