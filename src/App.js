import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { StateProvider } from "./Components/StateProvider";
import reducer, { initialState } from "./reducer";
import Checkout from "./Components/Checkout";

const App = () => {
  return (
    <StateProvider reducer={reducer} initialState={initialState}>
      <Router>
        <div className="app">
          <Switch>
            <Route path="/login">
              <Header />
              <h1>login</h1>
            </Route>

            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>

            <Route path="/">
              <Header />
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </StateProvider>
  );
};

export default App;
