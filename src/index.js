import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
// import {reduxFirestore, getFirestore} from 'redux-firestore';
// import {reactReduxFirebase, getFirebase} from 'react-redux-firebase';
import fb, {auth} from './config/fbConfig';

import reducer from './store/reducers/index';
import App from './App';

const th = thunk.withExtraArgument({
  firebase: fb,
  auth,
});
// const store = createStore(reducer, compose(applyMiddleware(th)));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(th)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
