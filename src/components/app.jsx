import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import MainScreen from './main-screen';
import NotFoundScreen from './not-found-screen';
import { AppRoute } from '../const';

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <MainScreen />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default App;