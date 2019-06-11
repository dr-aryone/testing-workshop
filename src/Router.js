import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ChangeName from "./pages/ChangeName/ChangeName";

import Toggle from "./pages/Toggle/Toggle";

import Counter from "./pages/Counter/Counter";

import Home from "./pages/Home/Home";

import Menu from "./components/Menu/Menu";

const Router = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route path="/toggle" component={Toggle} />
        <Route path="/counter" component={Counter} />
        <Route path="/change" component={ChangeName} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
