import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Carousel from "./Carousel";

const useStyles = makeStyles(() => ({
  banner: {
    backgroundImage: "url(./pic.jpeg)",
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-between",
  },
  tageline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Banner = () => {
  const classes = useStyles();
  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tageline}>
          <Typography
            variant='h2'
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            Cryto Made Easy
          </Typography>
          <Typography
            variant='subtitle2'
            style={{
              color: "darkGrey",
              transform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Get all the info regrading your favorite crypto currency
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
};

export default Banner;
