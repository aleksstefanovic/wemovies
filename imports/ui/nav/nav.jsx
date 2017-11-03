import React, {
    Component,
    PropTypes
} from 'react';
import {
    createContainer
} from 'meteor/react-meteor-data';
import styles from './nav.css'

export default class Nav extends Component {
    render() {
        return (
            <div className="nav-bg">
                    <p className="nav-title">Pop Movies</p>
                    <div className="settings"/>
            </div>
        );
    }
}
