import React from "react";
import { Route, Switch } from "react-router-dom";

import Library from "../components/Library";
import List from "../components/List";

const Routes = () => (
  <>
    <Switch>
      <Route path="/:id" component={Library} />
      <Route path="/" component={List} />
    </Switch>
  </>
);

export default Routes;
