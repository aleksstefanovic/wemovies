import config from './config.js';
import token from './token.js';
import { HTTP } from 'meteor/http';

export default TheMovieDB = {
        getPopularMovies : function getPopularMovies () {
            var url = config.base_url + '?api_key=' + token;
            var res = HTTP.get (url);
            return res;
        }
};
