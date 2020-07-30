import React from 'react';
import {useParams} from 'react-router-dom';
//import PropTypes from 'prop-types';

import styles from '../Booking/Booking.module.scss';

const Booking = () => {
  const { id } = useParams();
  return (
    <div className={styles.component}>

      <h2>
        Booking View
      </h2>

      <h3>
        Booking ID: {id}
      </h3>

    </div>
  );
};

export default Booking;
