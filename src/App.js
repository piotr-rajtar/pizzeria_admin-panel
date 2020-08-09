import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainLayout from '../src/components/layout/MainLayout/MainLayout';
import Dashboard from './components/views/Dashboard/Dashboard';
import Kitchen from '../src/components/views/Kitchen/Kitchen';
import Login from '../src/components/views/Login/Login';
import Tables from '../src/components/views/Tables/Tables';
import Waiter from '../src/components/views/Waiter/WaiterContainer';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2B4C6F',
    },
    /*secondary: {
      main: '#11cb5f',
    },*/
  },
});

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <MainLayout>
            <Switch>
              <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard} />
              <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
              <Route path={`${process.env.PUBLIC_URL}/tables`} component={Tables} />
              <Route path={`${process.env.PUBLIC_URL}/waiter`} component={Waiter} />
              <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  </Provider>
);

export default App;
