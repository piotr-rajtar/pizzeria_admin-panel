import React from 'react';
//import PropTypes from 'prop-types';

import styles from './Waiter.module.scss';

import {Link, Route, Switch} from 'react-router-dom';

import NewOrder from '../NewOrder/NewOrder';
import Order from '../Order/Order';

const Waiter = () => (
  <div className={styles.component}>
    <h2>
      Waiter view
    </h2>
    <ul>
      <li>
        <Link to={`${process.env.PUBLIC_URL}/waiter/order/new`}>Tables events new</Link>
      </li>
      <li>
        <Link exact to={`${process.env.PUBLIC_URL}/waiter/order/:id`}>Tables events</Link>
      </li>
    </ul>

    <Switch>
      <Route path={`${process.env.PUBLIC_URL}/waiter/order/new`}>
        <NewOrder />
      </Route>
      <Route path={`${process.env.PUBLIC_URL}/waiter/order/:id`}>
        <Order />
      </Route>
    </Switch>
  </div>
);

export default Waiter;
