import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Welcome from './Welcome';
import CreateChallange from './CreateChallange';
import StartChallange from './StartChallange';
import history from '../helpers/history';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter history={history}>
        <Switch>
          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/createchallange" component={CreateChallange} />
          <Route exact path="/startchallange" component={StartChallange} />
          <Route path="/*">{Welcome}</Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
