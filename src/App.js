// src/App.js

import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import UserList from "./components/UserList";
import userReducer from './redux/reducers/userReducer';

const store = createStore(userReducer, applyMiddleware(thunkMiddleware));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserList />
      </div>
    </Provider>
  );
}

export default App;
