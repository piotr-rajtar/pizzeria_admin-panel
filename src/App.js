import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import MainLayout from '../src/components/layout/MainLayout/MainLayout';
import PageNav from '../src/components/layout/PageNav/PageNav';

import Homepage from '../src/components/views/Homepage/Homepage';
import Kitchen from '../src/components/views/Kitchen/Kitchen';
import Login from '../src/components/views/Login/Login';
import Tables from '../src/components/views/Tables/Tables';
import Waiter from '../src/components/views/Waiter/Waiter';

const App = () => (

  <BrowserRouter>
    <MainLayout>
      <PageNav />
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
        <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
        <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={Tables} />
        <Route exact path={`${process.env.PUBLIC_URL}/waiter`} component={Waiter} />
        <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />
      </Switch>
    </MainLayout>
  </BrowserRouter>

);

export default App;
