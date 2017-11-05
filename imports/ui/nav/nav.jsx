import React, {
    Component
} from 'react';
import {
    createContainer
} from 'meteor/react-meteor-data';
import styles from './nav.css'
import NavMovies from './navMovies.jsx';
import NavBack from './navBack.jsx';
import browserHistory from '../../startup/history.jsx';

class Nav extends Component {
    render() {
        var movieId = null;
        var url = this.props.url;

        if (url) {
            movieId = url.split("/")[4];
        }

        if (movieId) {
            return (
                <div className="nav-bg">
                    <NavBack key="1" />
                    <div className="settings"/>
                </div>
            );
        }
        else {
            return (
                <div className="nav-bg">
                    <NavMovies key="1" />
                    <div className="settings"/>
                </div>
            );
        }
    }
}

export default createContainer((props) => {
    return {
        url : Session.get("url")
    }
}, Nav);
