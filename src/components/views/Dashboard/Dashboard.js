import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Dashboard.module.scss';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const dailyEvents = [
  {
    startHour: '10:00',
    duration: 2,
    table: 2,
    people: 4,
    type: 'event',
    id: 123,
  },
  {
    startHour: '14:00',
    duration: 1,
    table: 1,
    people: 2,
    type: 'booking',
    id: 456,
  },
];

const Dashboard = () => {

  return(
    <Paper className={styles.component}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Daily bookings</TableCell>
            <TableCell>Daily events</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>4</TableCell>
            <TableCell>5</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Table className={styles.summary}>
        <TableHead>
          <TableRow>
            <TableCell>Start hour</TableCell>
            <TableCell>Duration</TableCell>
            <TableCell>Table number</TableCell>
            <TableCell>People</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Event/Booking id</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dailyEvents.map(event => (
            <TableRow key={event.id}>
              <TableCell>{event.startHour}</TableCell>
              <TableCell>{event.duration}</TableCell>
              <TableCell>{event.table}</TableCell>
              <TableCell>{event.people}</TableCell>
              <TableCell>{event.type}</TableCell>
              <TableCell>{event.id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default Dashboard;
