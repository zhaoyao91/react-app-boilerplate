import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";

const MainPage = lazy(() => import("./pages/Main"));
const OtherPage = lazy(() => import("./pages/Other"));
const NotFoundPage = lazy(() => import("../NotFound"));

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
