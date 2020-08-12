import React from 'react';
import PropTypes from 'prop-types';
import {Link, Route, Switch} from 'react-router-dom';
import styles from './Waiter.module.scss';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import NewOrder from '../NewOrder/NewOrder';
import Order from '../Order/Order';

class Waiter extends React.Component {
  static propTypes = {
    fetchTables: PropTypes.func,
    changeTableStatus: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool,PropTypes.string]),
    }),
    tables: PropTypes.array,
  }

  componentDidMount(){
    const { fetchTables } = this.props;
    fetchTables();
  }

  renderActions(id, status) {
    const { changeTableStatus } = this.props;

    switch (status) {
      case 'free':
        return (
          <>
            <Button onClick = {() => changeTableStatus({id, status: 'thinking'})}>thinking</Button>
            <Button component={Link} to={`${process.env.PUBLIC_URL}/waiter/order/new`}>new order</Button>
          </>
        );
      case 'thinking':
        return (
          <Button component={Link} to={`${process.env.PUBLIC_URL}/waiter/order/new`}>new order</Button>
        );
      case 'ordered':
        return (
          <Button onClick = {() => changeTableStatus({id, status: 'prepared'})}>prepared</Button>
        );
      case 'prepared':
        return (
          <Button onClick = {() => changeTableStatus({id, status: 'delivered'})}>delivered</Button>
        );
      case 'delivered':
        return (
          <Button onClick = {() => changeTableStatus({id, status: 'paid'})}>paid</Button>
        );
      case 'paid':
        return (
          <Button onClick = {() => changeTableStatus({id, status: 'free'})}>free</Button>
        );
      default:
        return null;
    }
  }

  render() {
    const { loading: { active, error }, tables} = this.props;

    if(active || !tables.length){
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if(error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
        <Paper className={styles.component}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Table</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Order</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tables.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>
                    {row.status}
                  </TableCell>
                  <TableCell>
                    {row.order && (
                      <Button component={Link} to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                        {row.order}
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>
                    {this.renderActions(row.id, row.status)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <Switch>
            <Route path={`${process.env.PUBLIC_URL}/waiter/order/new`}>
              <NewOrder />
            </Route>
            <Route path={`${process.env.PUBLIC_URL}/waiter/order/:id`}>
              <Order />
            </Route>
          </Switch>
        </Paper>
      );
    }
  }
}

export default Waiter;
