import React from "react";
import { Divider } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import Why from "./Body/Why";
import Pricing from "./Body/Pricing";

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: "0 15em"
  }
});

const Body = props => {
  const { classes } = props;
  return (
    <main className={classes.root}>
      <Why />
      <Divider light />
      <Pricing />
    </main>
  );
};

export default withStyles(styles)(Body);
