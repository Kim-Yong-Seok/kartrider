import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './page/Home';
import ErrorPage from './page/ErrorPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route component={ ErrorPage } />
      </Switch>
    </Router>
  );
}

export default App;
