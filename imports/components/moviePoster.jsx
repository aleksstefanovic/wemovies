import React, {
    Component,
    PropTypes
} from 'react';
import Nav from '../ui/nav/nav.jsx';
import browserHistory from '../startup/history.jsx';

export default class MoviePoster extends Component {
    render() {
        return (
              <img className="cardReal" key={this.props.moviePoster.id} src={this.props.moviePoster.fullPosterUrl} alt={this.props.moviePoster.title} onClick={this.viewMovie.bind(this)} />
        );
    }

    viewMovie () {
        browserHistory.push("/movies/" + this.props.moviePoster.id);        
    }
}

MoviePoster.propTypes = {
    moviePoster: PropTypes.object
};
