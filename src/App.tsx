import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path="/app1">
          <p>App 1</p>
        </Route>
        <Route path="/app2">
          <p>App 2</p>
        </Route>
        <Route path="/">
          <p>Host</p>
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
