import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Login.module.scss';

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Login = () => (
  <Paper className={styles.component}>
    <form noValidate>
      <TextField
        id="outlined-basic"
        label="Login"
        variant="outlined"
        className={styles.inputField}
      />
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="outlined"
        className={styles.inputField}
      />
      <Button
        variant="outlined"
        color="primary"
        size="large"
        className={styles.button}
      >
        Login
      </Button>
    </form>
  </Paper>
);

export default Login;
