import React, { Suspense, lazy } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

const MainPage = lazy(() => import("./MainPage"));
const AboutPage = lazy(() => import("./AboutPage"));
const NotFoundPage = lazy(() => import("./NotFoundPage"));

const App = () => (
  <Suspense fallback={<p>loading...</p>}>
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/about" component={AboutPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  </Suspense>
);

export default App;
