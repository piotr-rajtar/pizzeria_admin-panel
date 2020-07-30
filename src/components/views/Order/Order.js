import React from 'react';
import {useParams} from 'react-router-dom';
//import PropTypes from 'prop-types';

import styles from '../Order/Order.module.scss';

const Order = () => {
  const { id } = useParams();
  return (
    <div className={styles.component}>

      <h2>
        Order View
      </h2>

      <h3>
        Order ID: {id}
      </h3>

    </div>
  );
};

export default Order;
