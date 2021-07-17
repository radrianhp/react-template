import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../../pages/Home/index";
import PageNotFound from "../../pages/Home/index";

export default function Routes() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/*">
            <Route component={PageNotFound} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
