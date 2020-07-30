import React from 'react';
//import PropTypes from 'prop-types';

import styles from '../Tables/Tables.module.scss';

import {Link, Route, Switch} from 'react-router-dom';

import NewBooking from '../NewBooking/NewBooking';
import NewEvent from '../NewEvent/NewEvent';
import Booking from '../Booking/Booking';
import Event from '../Event/Event';

const Tables = () => (
  <div className={styles.component}>
    <h2>
      Tables view
    </h2>
    <ul>
      <li>
        <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>Tables booking new</Link>
      </li>
      <li>
        <Link to={`${process.env.PUBLIC_URL}/tables/booking/:id`}>Table bookings</Link>
      </li>
      <li>
        <Link to={`${process.env.PUBLIC_URL}/tables/events/new`}>Tables events new</Link>
      </li>
      <li>
        <Link to={`${process.env.PUBLIC_URL}/tables/events/:id`}>Tables events</Link>
      </li>
    </ul>

    <Switch>
      <Route path={`${process.env.PUBLIC_URL}/tables/booking/new`}>
        <NewBooking />
      </Route>
      <Route path={`${process.env.PUBLIC_URL}/tables/booking/:id`}>
        <Booking />
      </Route>
      <Route path={`${process.env.PUBLIC_URL}/tables/events/new`}>
        <NewEvent />
      </Route>
      <Route path={`${process.env.PUBLIC_URL}/tables/events/:id`}>
        <Event />
      </Route>
    </Switch>




  </div>
);

export default Tables;
