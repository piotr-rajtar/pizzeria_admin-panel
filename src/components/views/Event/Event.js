import React from 'react';
import {useParams} from 'react-router-dom';
//import PropTypes from 'prop-types';

import styles from './Event.module.scss';

const Event = () => {
  const { id } = useParams();
  return (
    <div className={styles.component}>

      <h2>
        Event View
      </h2>

      <h3>
        Event ID: {id}
      </h3>

    </div>
  );
};

export default Event;
