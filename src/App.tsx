import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

const App1 = lazy(() => import('./App1'));
const App2 = lazy(() => import('./App2'));

const App = () => (
  <>
    <Header />

    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/app1" component={App1} />
        <Route path="/app2" component={App2} />
        <Route path="/">
          <p>Host</p>
        </Route>
      </Switch>
    </Suspense>

    <Footer />
  </>
);

export default App;
