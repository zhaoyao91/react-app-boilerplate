import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";

const MainPage = lazy(() => import("./MainPage"));
const OtherPage = lazy(() => import("./OtherPage"));
const NotFoundPage = lazy(() => import("../NotFoundPage"));

const AboutPage = ({ match }) => (
  <Switch>
    <Route exact path={match.path} component={MainPage} />
    <Route path={`${match.path}/other`} component={OtherPage} />
    <Route component={NotFoundPage} />
  </Switch>
);

export default AboutPage;
