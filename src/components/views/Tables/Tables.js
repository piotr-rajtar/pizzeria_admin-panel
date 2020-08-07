import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Tables.module.scss';

import {Link, Route, Switch} from 'react-router-dom';

import NewBooking from '../NewBooking/NewBooking';
import NewEvent from '../NewEvent/NewEvent';
import Booking from '../Booking/Booking';
import Event from '../Event/Event';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const reservations = [
  {hour: '10:00', table1: 'RESERVATION', table2: '', table3: 'EVENT', table4: '', table5: 'EVENT', table6: 'RESERVATION'},
  {hour: '10:30', table1: 'RESERVATION', table2: '', table3: 'EVENT', table4: '', table5: 'EVENT', table6: 'RESERVATION'},
  {hour: '11:00', table1: '', table2: 'RESERVATION', table3: '', table4: '', table5: '', table6: ''},
  {hour: '11:30', table1: '', table2: 'RESERVATION', table3: '', table4: 'EVENT', table5: '', table6: ''},
  {hour: '12:00', table1: '', table2: 'EVENT', table3: 'RESERVATION', table4: 'EVENT', table5: 'RESERVATION', table6: ''},
  {hour: '12:30', table1: '', table2: 'EVENT', table3: 'RESERVATION', table4: '', table5: 'RESERVATION', table6: ''},
  {hour: '13:00', table1: 'EVENT', table2: '', table3: '', table4: 'RESERVATION', table5: '', table6: 'EVENT'},
  {hour: '13:30', table1: 'EVENT', table2: '', table3: '', table4: 'RESERVATION', table5: '', table6: 'EVENT'},
];

const renderActions = status => {
  switch (status) {
    case '':
      return (
        <>
          <Button
            component={Link}
            to={`${process.env.PUBLIC_URL}/tables/booking/new`}
            variant="outlined"
            color="primary"
            size="large"
            className={styles.button}
          >
              New Booking
          </Button>
          <Button
            component={Link}
            to={`${process.env.PUBLIC_URL}/tables/events/new`}
            variant="outlined"
            color="primary"
            size="large"
            className={styles.button}
          >
            New Event
          </Button>
        </>
      );
    case 'RESERVATION':
      return (
        <Button
          component={Link}
          to={`${process.env.PUBLIC_URL}/tables/booking/:id`}
          variant="outlined"
          color="secondary"
          size="large"
          className={styles.button}
        >
          RESERVATION
        </Button>
      );
    case 'EVENT':
      return (
        <Button
          component={Link}
          to={`${process.env.PUBLIC_URL}/tables/events/:id`}
          variant="outlined"
          color="secondary"
          size="large"
          className={styles.button}
        >
          EVENT
        </Button>
      );
    default:
      return null;
  }
};

const Tables = () => {

  return (
    <Paper className={styles.component}>
      <form className={styles.datePicker} noValidate>
        <TextField
          id="date"
          type="date"
          defaultValue={new Date()}
        />
      </form>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Hour</TableCell>
            <TableCell>Table 1</TableCell>
            <TableCell>Table 2</TableCell>
            <TableCell>Table 3</TableCell>
            <TableCell>Table 4</TableCell>
            <TableCell>Table 5</TableCell>
            <TableCell>Table 6</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reservations.map(row => (
            <TableRow key={row.hour}>
              <TableCell component="th" scope="row">
                {row.hour}
              </TableCell>
              <TableCell>
                {renderActions(row.table1)}
              </TableCell>
              <TableCell>
                {renderActions(row.table2)}
              </TableCell>
              <TableCell>
                {renderActions(row.table3)}
              </TableCell>
              <TableCell>
                {renderActions(row.table4)}
              </TableCell>
              <TableCell>
                {renderActions(row.table5)}
              </TableCell>
              <TableCell>
                {renderActions(row.table6)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

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
    </Paper>
  );


};

export default Tables;
