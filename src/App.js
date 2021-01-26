import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import User from './user/pages/User';
import Place from './places/pages/Place';
import Login from './user/pages/Login';
import UserPlaces from './places/pages/UserPlaces';
import MainNavigation from './shared/components/MainNavgation';
import UpdatePlace from './places/pages/UpdatePlace';


const App = () => {
  return <Router>
    <MainNavigation />
    <main>
      <Switch>
        <Route path='/' exact>
          <User />
        </Route>
        <Route path='/places/new' exact>
          <Place />
        </Route>
        <Route path='/place/:pid'>
          <UpdatePlace />
        </Route>
        <Route path='/:userId/places' exact>
          <UserPlaces />
        </Route>    
        <Route path='/login' exact>
          <Login />
        </Route>
        <Redirect to='/' />
      </Switch>
    </main>
  </Router>
}

export default App;
