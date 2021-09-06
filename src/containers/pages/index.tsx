import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import News from "./news";
import Top from "./top";

const Pages = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Top} />
        <Route path="/news/" exact component={News} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Pages;
