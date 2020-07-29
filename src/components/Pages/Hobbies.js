import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Navbar from "./../Navbar";
import Footer from "../Footer";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration:'none',
    color:'black'
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100px",
    maxWidth: "300px",
    padding: "15px",
    margin:'1px', 
    backgroundColor:'darkgrey'  ,
   
  },
  title: {
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
  },
  subtitle: {
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
  },
}));

export default function Hobbies() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Navbar />

      <Container className={classes.cardGrid} maxWidth="lg">
        {/* End hero unit */}
       <h1 align="center">Webpage Design</h1>
        <Grid container spacing={0} justify="center" style={{margin:'20px 0'}} className="animate__animated animate__fadeIn ">
          <Grid item xs={6} sm={4} md={3} lg={3}  align="center" >
            <div className={classes.card}>
              <div style={{flexBasis:'none'}}>
              
            <a href="https://www.wit-selu.com/" target="_blank" className={classes.link}>        
            <p className={classes.title}>
              Women in Technology
            </p><hr/>
            <p className={classes.subtitle}>President ( Fall 2017 - Spring 2020 )</p></a>
            </div>
            </div>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={3}  align="center">
            <div className={classes.card}>
            <div style={{flexBasis:'none'}}>
            <a href="https://sassybeachwear.onrender.com/" target="_blank" className={classes.link}>
            <p className={classes.title}>
              Sassy Beachwear
            </p><hr/>
            <p className={classes.subtitle}>Beach Accessories Store</p></a>
            </div>
            </div>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={3}  align="center">
            <div className={classes.card}>
            <div style={{flexBasis:'none'}}>
            <a href="https://bubblethechipoo.netlify.app/" target="_blank" className={classes.link}>
            <p className={classes.title}>
            Bubble the Chipoo
            </p><hr/>
            <p className={classes.subtitle}>My Friend's Dog website 2019</p></a>
            </div>
            </div>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={3}  align="center">
            <div className={classes.card}>
            <div style={{flexBasis:'none'}}>
            <a href="https://magic8ball2.netlify.app/?" target="_blank" className={classes.link}>
            
            <p className={classes.title}>
              Have some Questions?
            </p><hr/>
            <p className={classes.subtitle}>Magic 8 Ball</p></a>
            </div>
            </div>
          </Grid>
        </Grid>

        <Grid container spacing={0} justify="center" style={{margin:'20px 0'}} className="animate__animated animate__jackInTheBox animate__delay-1s">
          <Grid item xs={6} sm={4} md={3} lg={3}  align="center" >
          <h1>Design</h1>
            <div className={classes.card}>
              <div style={{flexBasis:'none'}}>             
            <a href="https://www.instagram.com/letthedesignflow/" target="_blank" className={classes.link}>        
            <p className={classes.title}>
             @letthedesignflow
            </p><hr/>
            <p className={classes.subtitle}>Instagram</p></a>
            </div>
            </div>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={3}  align="center">
          <h1>Cooking</h1>
            <div className={classes.card}>
            <div style={{flexBasis:'none'}}>
            <a href="https://www.instagram.com/bae_is_hangry/" target="_blank" className={classes.link}>
            <p className={classes.title}>
              @bae_is_hangry
            </p><hr/>
            <p className={classes.subtitle}>Instagram</p></a>
            </div>
            </div>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={3}  align="center">
          <h1>Video Making</h1>
            <div className={classes.card}>
            <div style={{flexBasis:'none'}}>
            <a href="https://www.youtube.com/channel/UCYV-xKUYVk6BXeyUQ347o7Q" target="_blank" className={classes.link}>
            <p className={classes.title}>
              Animation, WIT videos
            </p><hr/>
            <p className={classes.subtitle}>YouTube</p></a>
            </div>
            </div>
          </Grid>
          </Grid>

          
      </Container>
      <Footer/>
    </React.Fragment>
  );
}
