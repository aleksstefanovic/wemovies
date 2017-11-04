import { Meteor } from 'meteor/meteor';
import TheMovieDB from '../imports/api/themoviedb.js';

Meteor.startup(() => {
    Meteor.methods(TheMovieDB);
});
