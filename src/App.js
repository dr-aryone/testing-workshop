import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import ChangeName from "./pages/ChangeName/ChangeName";

import Toggle from "./pages/Toggle/Toggle";

import Counter from "./pages/Counter/Counter";

import Home from "./pages/Home/Home";

import Menu from "./components/Menu/Menu";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap');

  body {
    text-align: center;
    font-family: "Roboto Condensed", sans-serif;
  }
`;

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <h1>Testing Workshop</h1>
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
