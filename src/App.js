import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './css/index.css';

import Home from './page/Home';
import ErrorPage from './page/ErrorPage';
import Search from './page/Search';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/home" component={ Home } />
        <Route path="/search" component={ Search } />
        <Route component={ ErrorPage } />
      </Switch>
    </Router>
  );
}

export default App;
