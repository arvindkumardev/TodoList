import React from 'react';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import Todo from './src/component/Todo';
// import Todo from './component/Todo';
// import rootReducer from './reducers/rootReducer';
import rootReducer from './src/redux/reducers/rootReducer';

// const store = createStore(rootReducer, applyMiddleware(logger));
const store = createStore(rootReducer, applyMiddleware(logger));
const App = () => (
  <Provider store={store}>
    <Todo />
  </Provider>
);
export default App;
