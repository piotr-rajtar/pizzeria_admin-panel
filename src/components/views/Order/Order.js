import React from 'react';
import {useParams} from 'react-router-dom';
//import PropTypes from 'prop-types';
import styles from './Order.module.scss';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Order = () => {
  const { id } = useParams();

  const demoOrder = [
    {
      table: 3,
      status: 'ordered',
      order: id,
      product: 'pizza',
      option: 'olives',
      total: '5PLN',
    },
  ];

  return (
    <Paper className={styles.component}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Table</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Order</TableCell>
            <TableCell>Product</TableCell>
            <TableCell>Option</TableCell>
            <TableCell>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoOrder.map(row => (
            <TableRow key={row.id}>
              <TableCell>
                {row.table}
              </TableCell>
              <TableCell>
                {row.status}
              </TableCell>
              <TableCell>
                {row.order}
              </TableCell>
              <TableCell>
                {row.product}
              </TableCell>
              <TableCell>
                {row.option}
              </TableCell>
              <TableCell>
                {row.total}
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

export default Order;
