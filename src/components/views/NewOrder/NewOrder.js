import React from 'react';
//import PropTypes from 'prop-types';
import styles from './NewOrder.module.scss';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const params = [
  'param1',
  'param2',
  'param3',
  'param4',
  'param5',
  'param6',
];

const NewOrder = () => {
  const [ingredient, setIngredient] = React.useState([]);

  const handleChange = (event) => {
    setIngredient(event.target.value);
  };

  return (
    <Paper className={styles.component}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Table</TableCell>
            <TableCell>Menu</TableCell>
            <TableCell>Order option</TableCell>
            <TableCell>Order summary</TableCell>
            <TableCell>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <FormControl>
                <Select>
                  <MenuItem value=''>None</MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                </Select>
              </FormControl>
            </TableCell>
            <TableCell>
              <FormControl>
                <Select>
                  <MenuItem value={'coffe'}>Donut</MenuItem>
                  <MenuItem value={'breakfast'}>Coffe</MenuItem>
                  <MenuItem value={'pizza'}>Pizza</MenuItem>
                  <MenuItem value={'salad'}>Salad</MenuItem>
                </Select>
              </FormControl>
            </TableCell>
            <TableCell>
              <FormControl>
                <Select
                  multiple
                  value={ingredient}
                  onChange={handleChange}
                  input={<Input />}
                  renderValue={(selected) => selected.join(', ')}
                >
                  {params.map((param) => (
                    <MenuItem key={param} value={param}>
                      <Checkbox checked={ingredient.indexOf(param) > -1} />
                      <ListItemText primary={param} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </TableCell>
            <TableCell>OPTION: TOTAL</TableCell>
            <TableCell>TOTAL</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <ButtonGroup className={styles.button} variant="contained" color="primary" aria-label="outlined primary button group">
        <Button>Add</Button>
        <Button>Cancel</Button>
        <Button>Modify</Button>
      </ButtonGroup>
    </Paper>
  );
};

export default NewOrder;
