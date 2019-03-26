import React, { Suspense, lazy, useMemo } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { I18nextProvider } from "react-i18next";

import createI18N from "./createI18N";
import Viewport from "./comps/Viewport";
import Loading from "./comps/Loading";
import ErrorBoundary from "./comps/ErrorBoundary";

const MainPage = lazy(() => import("./MainPage"));
const AboutPage = lazy(() => import("./AboutPage"));
const NotFoundPage = lazy(() => import("./NotFoundPage"));

const App = () => {
  const i18n = useMemo(() => createI18N(), []);

  return (
    <I18nextProvider i18n={i18n}>
      <Viewport>
        <ErrorBoundary>
          <Suspense fallback={<Loading />}>
            <Router>
              <Switch>
                <Route exact path="/" component={MainPage} />
                <Route path="/about" component={AboutPage} />
                <Route component={NotFoundPage} />
              </Switch>
            </Router>
          </Suspense>
        </ErrorBoundary>
      </Viewport>
    </I18nextProvider>
  );
};
export default App;
