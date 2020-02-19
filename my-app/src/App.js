import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import './App.css';
import GetFactButton from './components/GetFactButton';

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
    <div className="App">
        <GetFactButton />
        <Facts />
      </div>
      </Provider>
  );
}

export default App;
