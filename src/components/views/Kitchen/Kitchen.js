import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Kitchen.module.scss';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Checkbox from '@material-ui/core/Checkbox';

const demoOrder = [
  {
    table: 3,
    order: 123,
    product: 'salad',
    option: 'vegetarian',
  },
  {
    table: '',
    order: 456,
    product: 'coffe',
    option: 'latte',
  },
  {
    table: 1,
    order: 789,
    product: 'pizza',
    option: 'olives',
  },
];

const Kitchen = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <Paper className={styles.component}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Table</TableCell>
            <TableCell>Order</TableCell>
            <TableCell>Product</TableCell>
            <TableCell>Option</TableCell>
            <TableCell>Done</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoOrder.map(row => (
            <TableRow key={row.id}>
              <TableCell>
                {row.table}
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
                <Checkbox
                  color="primary"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};
export default Kitchen;
