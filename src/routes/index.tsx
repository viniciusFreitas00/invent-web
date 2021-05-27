import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Route";

import Login from "../pages/Login";
import DashBoard from "../pages/DashBoard";

const Routes = () => {
  return (
    <Switch>
      <Route key="1" component={Login} exact path="/" />
      <Route path="/home" component={DashBoard} />
    </Switch>
  );
};

export default Routes;
