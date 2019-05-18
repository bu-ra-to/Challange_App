import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import Welcome from './Welcome';
import CreateChallange from './CreateChallange';
import StartChallange from './StartChallange';
import history from '../helpers/history';

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/welcome" component={Welcome} />
        <Route exact path="/createchallange" component={CreateChallange} />
        <Route exact path="/startchallange" component={StartChallange} />
        <Route path="/*">{Welcome}</Route>
      </Switch>
    </Router>
  );
};

export default App;
