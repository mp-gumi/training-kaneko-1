import React from "react";
import { Switch, Route } from "react-router-dom";
import Pages from "./pages";
import News from "./pages/news";

const Containers = () => (
  <Switch>
    <Route exact={true} path="/">
      <Pages />
    </Route>
    <Route exact={true} path="/news">
      <News />
    </Route>
  </Switch>
);

export default Containers;
