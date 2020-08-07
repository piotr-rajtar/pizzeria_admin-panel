import React from 'react';
import {useParams} from 'react-router-dom';
//import PropTypes from 'prop-types';
import styles from './Booking.module.scss';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Booking = () => {
  const { id } = useParams();

  const demoBooking = [
    {
      start: '15:00',
      duration: 1,
      people: 2,
      id: id,
    },
  ];

  return (
    <Paper className={styles.component}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Start hour</TableCell>
            <TableCell>Duration</TableCell>
            <TableCell>People</TableCell>
            <TableCell>Booking id</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoBooking.map(row => (
            <TableRow key={row.id}>
              <TableCell>
                {row.start}
              </TableCell>
              <TableCell>
                {row.duration}
              </TableCell>
              <TableCell>
                {row.people}
              </TableCell>
              <TableCell>
                {row.id}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ButtonGroup className={styles.button} variant="contained" color="primary" aria-label="outlined primary button group">
        <Button>Cancel</Button>
        <Button>Modify</Button>
      </ButtonGroup>
    </Paper>
  );
};

export default Booking;
