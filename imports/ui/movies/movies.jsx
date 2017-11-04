import React, {
    Component
} from 'react';

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
                this.setState({
                    movies: movies
                });
            }
        });

    }

    render() {
        return (
            <div>
                {this.renderMoviePoster ()}
            </div>
        );
    }

    renderMoviePoster () {
        if (this.state.movies.length === 0){
            return (
                    <div></div>
                );
        } 
        else {
        return this.state.movies.map((movie) => (
            <p key={movie.id}>{movie.title}</p>
        ))}; 
    }
}
