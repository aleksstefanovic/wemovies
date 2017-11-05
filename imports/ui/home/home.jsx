import React, {
    Component
} from 'react';
import browserHistory from '../../startup/history.jsx';
import styles from './home.css'

export default class Home extends Component {
    render() {
        return (
            <div>
            </div>
        );
    }

    componentDidMount () {
        Session.set ("url", window.location.href);
        browserHistory.push("/movies");        
    }
}
