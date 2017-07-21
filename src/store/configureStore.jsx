import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from 'reducers';
import asyncAwait from 'redux-async-await';

const middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

export const store = createStore(
    reducers,
    enhancers,
    applyMiddleware(...middleware, asyncAwait)
);

if (module.hot) {
  module.hot.accept('../reducers/', () => {
    const nextRootReducer = require('../reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export const history = createHistory();

