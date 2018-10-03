import React from "react";
import {
  Paper,
  Grid,
  Typography,
  withStyles,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button
} from "@material-ui/core";

const styles = theme => ({
  typography: {
    margin: theme.spacing.unit
  },
  pricingText: {
    width: "40vw",
    margin: "0 auto"
  },
  section: {
    margin: "3.5em 0"
  },
  cardHighlight: {
    padding: "3.4em"
  },
  cardHeader: {
    backgroundColor: "#1DE9B6",
    padding: "1.8em"
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline"
  }
});

const tiers = [
  {
    title: "FREE",
    price: 0,
    description: [
      "10 examinees/day",
      "Help Center access",
      "5 max exams",
      "Email support"
    ],
    buttonText: "Try for FREE",
    buttonVariant: "outlined"
  },
  {
    title: "PRO",
    subheader: "BEST SELLER",
    price: 10,
    description: [
      "30 examinees/day",
      "Help Center access",
      "30 max exams",
      "Priority email support"
    ],
    buttonText: "Get Started",
    buttonVariant: "contained"
  },
  {
    title: "ENTERPRISE",
    price: 20,
    description: [
      "Unlimited examinees/day",
      "Help Center access",
      "Unlimited number of exams",
      "Priority phone & email support"
    ],
    buttonText: "Contact Us",
    buttonVariant: "outlined"
  }
];

const Pricing = ({ classes }) => {
  const prices = tiers.map(tier => (
    <Grid item xs={4}>
      <Card elevation={tier.title === "PRO" ? "10" : "2"}>
        <CardHeader
          title={tier.title}
          subheader={tier.subheader}
          titleTypographyProps={{ align: "center" }}
          subheaderTypographyProps={{ align: "center" }}
          className={classes.cardHeader}
        />
        <CardContent
          className={tier.title === "PRO" ? classes.cardHighlight : ""}
        >
          <div className={classes.cardPricing}>
            <Typography variant="display4" color="textPrimary">
              ${tier.price}
            </Typography>
            <Typography variant="title" color="textSecondary">
              /month
            </Typography>
          </div>
          {tier.description.map(desc => (
            <Typography variant="subheading" align="center">
              {desc}
            </Typography>
          ))}
        </CardContent>
        <CardActions>
          <Button
            fullWidth
            variant={tier.buttonVariant}
            color="primary"
            size="large"
          >
            {tier.buttonText}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  ));

  return (
    <section className={classes.section}>
      <Grid container spacing={24} className={classes.pricingText}>
        <Grid item xs={12}>
          <Typography
            variant="display3"
            color="textPrimary"
            className={classes.typography}
          >
            Pricing
          </Typography>
          <Typography
            variant="title"
            color="textSecondary"
            className={classes.typography}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
            impedit nostrum provident ex magni laudantium dolores consequatur
            accusantium cupiditate suscipit?
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={24} alignItems="center">
        {prices}
      </Grid>
    </section>
  );
};

export default withStyles(styles)(Pricing);
