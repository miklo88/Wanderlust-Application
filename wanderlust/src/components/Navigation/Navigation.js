import React from "react";
// import ReactDOM from 'react-dom';
// import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';
import SearchForm from '../Search/SearchForm';
// import "../App.css";

const useStyles = makeStyles(theme => ({
  palette: {
    primary: {
      main: '#e0f7fa',
    },
    secondary: {
      main: '#ef5350',
    },
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" href="#contained-buttons">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="headline" className={classes.title}>
            Wanderlust
          </Typography>
          <SearchForm />
          {/* <Button color="inherit" component="button">
          <Link
              component="button"
              color="inherit"
              aria-label="menu"
              variant="body2"
              onClick={() => {
                alert('<SignIn />');
              }}
            >
              Sign In
            </Link>
          </Button>
          <Button color="inherit" component="button">
          <Link
              component="button"
              color="inherit"
              aria-label="menu"
              variant="body2"
              onClick={() => {
                alert();
              }}
            >
              Sign Up
            </Link>
          </Button> */}

        </Toolbar>
      </AppBar>
      {/* <Button variant="contained" type="button" href="#contained-buttons" className={classes.button}>
        <a href=""></a>
        </Button>
    <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      /> 
       */}
    </div>
  );
}
