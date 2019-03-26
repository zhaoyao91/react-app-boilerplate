import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";

const MainPage = lazy(() => import("./MainPage"));
const OtherPage = lazy(() => import("./OtherPage"));
const NotFoundPage = lazy(() => import("../NotFoundPage"));

const AboutPage = ({ match }) => (
  <>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Switch>
      <Route exact path={match.path} component={MainPage} />
      <Route path={`${match.path}/other`} component={OtherPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </>
);

export default AboutPage;
