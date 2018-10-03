import React from "react";
import {
  Divider,
  Grid,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  withStyles
} from "@material-ui/core";
import { CheckCircleOutlined } from "@material-ui/icons";

const styles = theme => ({
  paper: {
    padding: "2em 6em",
    minHeight: "26vh"
  },
  typography: {
    margin: theme.spacing.unit
  },
  section: {
    margin: "3.5em 0"
  },
  list: {
    paddingLeft: "40px"
  }
});

const Why = ({ classes }) => (
  <section className={classes.section}>
    <Grid container spacing={24}>
      <Grid item xs={12}>
        <Typography variant="display3" color="textPrimary">
          Why \ Codego \ ?
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <Typography className={classes.typography} variant="headline">
            EASE OF USE
          </Typography>
          <Divider />
          <Typography className={classes.typography} variant="body1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam,
            corrupti!
          </Typography>
          <List className={classes.list}>
            <ListItem>
              <ListItemIcon>
                <CheckCircleOutlined />
              </ListItemIcon>
              <ListItemText>Lorem, ipsum</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleOutlined />
              </ListItemIcon>
              <ListItemText>Lorem ipsum dolor sit</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleOutlined />
              </ListItemIcon>
              <ListItemText>Lorem, ipsum dolor</ListItemText>
            </ListItem>
          </List>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <Typography className={classes.typography} variant="headline">
            RELIABLE
          </Typography>
          <Divider />
          <Typography className={classes.typography} variant="body1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
            consectetur architecto quis porro? Corrupti, velit. Quibusdam
            inventore voluptatem iste! Nam, vel enim dolores itaque non magnam
            est, optio iste ipsam facere voluptatem aut, consequatur
            voluptatibus excepturi quam saepe dolorum fuga.
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            repellat laboriosam, voluptas quibusdam nisi ea aperiam ab aliquid
            earum voluptates, nihil delectus dignissimos itaque minus.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  </section>
);

export default withStyles(styles)(Why);
