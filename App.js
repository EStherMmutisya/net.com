import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />

        {/* Content Section */}
        <Switch>
          <Route exact path="/">
            {/* Home page content */}
            <h1>Welcome to Netflix Clone</h1>
          </Route>
          <Route path="/tv-shows">
            {/* TV Shows page content */}
            <h1>TV Shows Page</h1>
          </Route>
          <Route path="/movies">
            {/* Movies page content */}
            <h1>Movies Page</h1>
          </Route>
          <Route path="/my-list">
            {/* My List page content */}
            <h1>My List Page</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
