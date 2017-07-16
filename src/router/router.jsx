import React from 'react';
import { Router, Route } from 'react-router';
import { history } from 'store/configureStore';
import Application from 'containers/Application';

const Routes = (
  <Router history={history}>
    <Route path="/" component={Application} />
  </Router>
);
export default Routes;
