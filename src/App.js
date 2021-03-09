import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './css/index.css';

import Home from './page/Home';
import ErrorPage from './page/ErrorPage';
import SearchContainer from './container/SearchContainer';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/home" component={ Home } />
        <Route path="/search" component={ SearchContainer } />
        <Route component={ ErrorPage } />
      </Switch>
    </Router>
  );
}

export default App;
