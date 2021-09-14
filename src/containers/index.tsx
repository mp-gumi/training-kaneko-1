import React from "react";
import { Switch, Route } from "react-router-dom";
import Pages from "./pages";
import Form from "./pages/form";
import News from "./pages/news";

const Containers = () => (
  <Switch>
    <Route exact={true} path="/">
      <Pages />
    </Route>
    <Route exact={true} path="/news">
      <News />
    </Route>
    <Route exact={true} path="/form">
      <Form />
    </Route>
  </Switch>
);

export default Containers;
