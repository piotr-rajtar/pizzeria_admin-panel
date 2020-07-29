import React from 'react';
//import PropTypes from 'prop-types';

import styles from '../Waiter/Waiter.module.scss';

import {Link} from 'react-router-dom';

const Waiter = () => (
  <div className={styles.component}>
    <h2>
      Waiter view
      <Link to={`${process.env.PUBLIC_URL}/waiter/order/new`}>Tables events new</Link>
      <Link to={`${process.env.PUBLIC_URL}/waiter/order/:id`}>Tables events</Link>
    </h2>
  </div>
);

export default Waiter;
