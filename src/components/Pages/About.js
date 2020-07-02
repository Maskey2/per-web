import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Navbar from "./../Navbar";
import Footer from "../Footer";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "220px",
    maxWidth: "300px",
    padding: "15px",
    margin:'1px', 
    backgroundColor:'black'  ,
    display:'flex',
    alignItems:'center',
   
  },
  title: {
    color: "white",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
  },
  subtitle: {
    color: "white",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
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
          <Grid item xs={12} sm={4} md={6} lg={6} align="center"  className="animate__animated animate__jackInTheBox" >
            <img
              src="https://source.unsplash.com/random"
              alt=""
              style={{ maxWidth: "400px" }}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={6} lg={6}>
            <p align="center" style={{fontSize:'50px'}} className="animate__animated animate__zoomIn">About Me</p>
            <Typography className="animate__animated animate__fadeInDown animate__delay-1s">
              <h2>I am Nishma Maskey.</h2> 
              <p>I graduated from Southeastern Louisiana University with Bachelors degree in Computer Science with minor in Mathematics.</p> 
              <p>I am a Front-End Developer and a Graphic Designer from New Orleans, LA</p>
              <p>Besides Designing and Coding, I love to watch movies, cook, play guitar and paint!</p>
            </Typography>
        
           
          </Grid>
        </Grid>

        <Grid container spacing={0} justify="center" style={{margin:'20px 0'}} className="animate__animated animate__jackInTheBox animate__delay-1s">
          <Grid item xs={6} sm={4} md={3} lg={3}  align="center" >
            <div className={classes.card}>
              <div style={{flexBasis:'none'}}>
            <img
              src="https://i.ya-webdesign.com/images/award-transparent-animated-4.gif"
              alt="award"
              height="40px"
              align="center"
            />          
            <p className={classes.title}>
              Thomas F. Higginbotham Scholarship in Computing Science
            </p><hr/>
            <p className={classes.subtitle}>Spring 2020</p>
            </div>
            </div>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={3}  align="center">
            <div className={classes.card}>
            <div style={{flexBasis:'none'}}>
            <img
              src="https://i.ya-webdesign.com/images/award-transparent-animated-4.gif"
              alt="award"
              height="50px"
              align="center"
            />
            <p className={classes.title}>
              David Ware & Associates Outstanding International Student Award
              2019
            </p><hr/>
            <p className={classes.subtitle}>Spring 2019</p>
            </div>
            </div>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={3}  align="center">
            <div className={classes.card}>
            <div style={{flexBasis:'none'}}>
            <img
              src="https://i.ya-webdesign.com/images/award-transparent-animated-4.gif"
              alt="award"
              height="50px"
              align="center"
            />
            <p className={classes.title}>
              Distinguished Research Presentation Award PROFIT Asset Program
            </p><hr/>
            <p className={classes.subtitle}>Spring 2019</p>
            </div>
            </div>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={3}  align="center">
            <div className={classes.card}>
            <div style={{flexBasis:'none'}}>
            <img
              src="https://i.ya-webdesign.com/images/award-transparent-animated-4.gif"
              alt="award"
              height="50px"
              align="center"
            />
            <p className={classes.title}>
              Tangipahoa Professional Women's Organization Annual Scholarship
            </p><hr/>
            <p className={classes.subtitle}>Summer 2019</p>
            </div>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Footer/>
    </React.Fragment>
  );
}
