import React from "react";
import { Route, Switch } from "react-router-dom";

import List from "../components/List";

const Routes = () => (
  <>
    <Switch>
      <Route path="/" component={List} />
    </Switch>
  </>
);

export default Routes;
