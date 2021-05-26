import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Route";

import Login from "../pages/Login";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route key="1" component={Login} exact path="/" />
      <Route path="/home" component={Home} />
    </Switch>
  );
};

export default Routes;
