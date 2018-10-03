import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button, Grid, Divider } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import banner from "../../assets/banner.png";

const styles = theme => ({
  bannerContainer: {
    backgroundImage: `url(${banner})`,
    height: "450px"
  },
  textContainer: {
    height: "100%"
  },
  textContainerBg: {
    width: "40em",
    margin: "0 auto",
    padding: "4em",
    borderRadius: "3px",
    background: "#0000008c"
  },
  bannerText: {
    color: "#fff"
  },
  bigCta: {
    padding: "20px 50px",
    marginTop: "1em"
  },
  divider: {
    backgroundColor: "#625F70",
    marginBottom: "1em"
  }
});

const Banner = props => {
  const { classes } = props;
  return (
    <header className={classes.bannerContainer}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.textContainer}
      >
        <Grid item xs={12}>
          <div className={classes.textContainerBg}>
            <Typography
              gutterBottom
              variant="display3"
              className={classes.bannerText}
            >
              WELCOME
            </Typography>
            <Divider className={classes.divider} />
            <Typography
              gutterBottom
              variant="body1"
              className={classes.bannerText}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              doloribus corrupti cum ducimus eos sequi voluptatibus neque
              dolores, quis sapiente, itaque, iusto expedita illum commodi autem
              officia? Odit, iste beatae!
            </Typography>
            <Button
              className={classes.bigCta}
              component={Link}
              to="/question/1"
              variant="outlined"
              size="large"
              color="secondary"
            >
              Start Exam
            </Button>
          </div>
        </Grid>
      </Grid>
    </header>
  );
};

export default withStyles(styles)(Banner);
