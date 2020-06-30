import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Navbar from "./../Navbar";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "200px",
    maxWidth: "300px",
    margin: "5px",
    backgroundColor: "black",
  },
  title: {
    color: "white",
    textAlign: "center",
  },
  subtitle: {
    color: "white",
    textAlign: "center",
  },
}));

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Navbar />

      <Container className={classes.cardGrid} maxWidth="lg">
        {/* End hero unit */}
        <Grid container spacing={4}>
          <Grid item xs={6} sm={4} md={6} lg={6} align="center">
            <img
              src="https://source.unsplash.com/random"
              alt=""
              style={{ maxWidth: "400px" }}
            />
          </Grid>
          <Grid item xs={6} sm={4} md={6} lg={6}>
            <p align="center" style={{fontSize:'50px'}}>About Me</p>
            <Typography>
              <h3>I am Nishma Maskey.</h3> 
              <p>I graduated from Southeastern Louisiana University with Bachelors degree in Computer Science with minor in Mathematics.</p> 
              <p>I am a Front-End Developer and a Graphic Designer from New Orleans, LA</p>
              <p>Besides Designing and Coding, I love to watch movies, cook, play guitar and paint!</p>
            </Typography>
        
           
          </Grid>
        </Grid>

        <Grid container spacing={2} justify="center" style={{margin:'20px 0'}}>
          <Grid item xs={2} lg={3} className={classes.card} align="center">
            <img
              src="https://i.ya-webdesign.com/images/award-transparent-animated-4.gif"
              alt="award"
              height="50px"
              align="center"
            />
            <p className={classes.title}>
              Thomas F. Higginbotham Scholarship in Computing Science
            </p>
            <p className={classes.subtitle}>Spring 2020</p>
          </Grid>
          <Grid item xs={2} lg={3} className={classes.card} align="center">
            <img
              src="https://i.ya-webdesign.com/images/award-transparent-animated-4.gif"
              alt="award"
              height="50px"
              align="center"
            />
            <p className={classes.title}>
              David Ware & Associates Outstanding International Student Award
              2019
            </p>
            <p className={classes.subtitle}>Spring 2019</p>
          </Grid>
          <Grid item xs={2} lg={3} className={classes.card} align="center">
            <img
              src="https://i.ya-webdesign.com/images/award-transparent-animated-4.gif"
              alt="award"
              height="50px"
              align="center"
            />
            <p className={classes.title}>
              Distinguished Research Presentation Award PROFIT Asset Program
            </p>
            <p className={classes.subtitle}>Spring 2019</p>
          </Grid>
          <Grid item xs={2} lg={3} className={classes.card} align="center">
            <img
              src="https://i.ya-webdesign.com/images/award-transparent-animated-4.gif"
              alt="award"
              height="50px"
              align="center"
            />
            <p className={classes.title}>
              Tangipahoa Professional Women's Organization Annual Scholarship
            </p>
            <p className={classes.subtitle}>Summer 2019</p>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
