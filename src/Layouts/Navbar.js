import React from "react";
import { NavLink } from "react-router-dom";
import {
  Toolbar,
  AppBar,
  Typography,
  Button,
  withStyles
} from "@material-ui/core";

const styles = theme => ({
  root: {
    flexGrow: 1,
    position: "sticky",
    top: 0,
    zIndex: 9999
  },
  grow: {
    flexGrow: 1
  },
  navLink: {
    color: "#fff",
    textDecoration: "none"
  },
  navBar: {
    margin: "0 15em"
  }
});

const Navbar = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar className={classes.navBar}>
          <Typography variant="title" color="inherit">
            \ Codego \
          </Typography>
          <div className={classes.grow} />
          <Button color="inherit" component={NavLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={NavLink} to="/login">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(Navbar);
