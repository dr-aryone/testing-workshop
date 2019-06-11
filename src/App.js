import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ChangeName from "./pages/ChangeName/ChangeName";

import Toggle from "./pages/Toggle/Toggle";

import Counter from "./pages/Counter/Counter";

import Menu from "./components/Menu/Menu";

const Router = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route path="/toggle" component={Toggle} />
        <Route path="/counter" component={Counter} />
        <Route path="/change" component={ChangeName} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
