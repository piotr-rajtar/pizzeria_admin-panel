import React from 'react';
//import PropTypes from 'prop-types';
import styles from './NewEvent.module.scss';

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

const NewEvent = () => (
  <Paper>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Start Hour</TableCell>
          <TableCell>Duration</TableCell>
          <TableCell>People</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableCell>
          <FormControl>
            <Select>
              <MenuItem value={10}>10:00</MenuItem>
              <MenuItem value={10.5}>10:30</MenuItem>
              <MenuItem value={11}>11:00</MenuItem>
              <MenuItem value={11.5}>11:30</MenuItem>
              <MenuItem value={12}>12:00</MenuItem>
              <MenuItem value={12.5}>12:30</MenuItem>
              <MenuItem value={13}>13:00</MenuItem>
            </Select>
          </FormControl>
        </TableCell>
        <TableCell>
          <FormControl>
            <Select>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
            </Select>
          </FormControl>
        </TableCell>
        <TableCell>
          <FormControl>
            <Select>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
            </Select>
          </FormControl>
        </TableCell>
      </TableBody>
    </Table>
    <ButtonGroup className={styles.button} variant="contained" color="primary" aria-label="outlined primary button group">
      <Button>Add</Button>
      <Button>Cancel</Button>
      <Button>Modify</Button>
    </ButtonGroup>
  </Paper>
);

export default NewEvent;
