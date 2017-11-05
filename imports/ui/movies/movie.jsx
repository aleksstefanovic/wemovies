import React, {
    Component
} from 'react';
import theMovieDBConfig from '../../api/config.js';

export default class Movie extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.id,
            movie: {},
        }
    }

    componentDidMount() {
        var movie = {};

        Meteor.call('getMovie', this.state.id,  (error, result) => {
            if (!error && result.statusCode == '200') {
                var content = JSON.parse(result.content);

                content.fullPosterUrl = theMovieDBConfig.image_url + content.poster_path;
                content.release_year = content.release_date.split("-")[0];
                this.setState({
                    movie: content
                });
            }
        });
    }

    render() {
        return (
            <div>
                <div className="movie-title-bar">
                        <p className="movie-title">{this.state.movie.title}</p>
                </div>
                
                <br />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                          <img className="movie-poster" src={this.state.movie.fullPosterUrl} alt={this.state.movie.title} />
                        </div>

                        <div className="col">
                            <p className="movie-year">{this.state.movie.release_year}</p>
                            <p className="movie-runtime">{this.state.movie.runtime} min</p>
                            <p className="movie-rating">{this.state.movie.vote_average}/10</p>
                            <button className="movie-fav">MARK AS FAVORITE</button>
                        </div>
                    </div>

                    <br />
                    <div className="row">
                        <div className="col">
                            <p className="movie-overview">{this.state.movie.overview}</p>
                            <hr />
                            <p className="movie-trailers">Trailers:</p>
                            <p className="movie-trailer-text"><span className="play-arrow">&#9658;</span> Trailer 1</p>
                            <br />
                            <hr />
                            <p className="movie-trailer-text"><span className="play-arrow">&#9658;</span> Trailer 2</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
