import React, {
    Component
} from 'react';
import browserHistory from '../../startup/history.jsx';

export default class NavBack extends Component {
    render() {
        return (
                <div>
                    <p className="nav-title movie-back-arrow" onClick={this.goBack}>&#10140;</p>
                    <p className="nav-title"> Movie Details</p>
                </div>
        );
    }

    goBack () {
        browserHistory.goBack();
    }
}
