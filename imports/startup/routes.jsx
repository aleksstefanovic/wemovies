import React from 'react';
import {
    Router,
    Route,
    Switch
} from 'react-router';
import browserHistory from './history.jsx';

import Home from '../ui/home/home.jsx';
import Movies from '../ui/movies/movies.jsx';
import PageNotFound from '../ui/pagenotfound/pagenotfound.jsx';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/movies" component={Movies} />
      <Route component={PageNotFound} />
    </Switch>
  </Router>
);
