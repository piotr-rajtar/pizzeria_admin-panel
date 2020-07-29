import React from 'react';
//import PropTypes from 'prop-types';

import styles from '../Tables/Tables.module.scss';

import {Link} from 'react-router-dom';

const Tables = () => (
  <div className={styles.component}>
    <h2>
      Tables view
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>Tables booking new</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/:id`}>Table bookings</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/new`}>Tables events new</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/:id`}>Tables events</Link>
    </h2>
  </div>
);

export default Tables;
