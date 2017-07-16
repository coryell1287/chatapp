import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from 'store/configureStore';
import Routes from 'router/router';

render(
  <Provider store={store}>
    {Routes}
  </Provider>,
  document.getElementById('root'),
);
