import React from "react";
import GetJokeButton from "./components/GetJokeButton";
import { createStore, applyMiddleware } from "redux";
import { factReducer as reducer } from "./reducers/factReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import Jokes from "./components/Jokes";

import "./App.css";

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        LMFAO
        <p>
          <GetJokeButton />
        </p>
        <Jokes />
      </div>
    </Provider>
  );
}

export default App;
