import React from "react";
import Navbar from "./../Navbar";
import InstagramEmbed from "react-instagram-embed";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

export default function Hobbies() {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      
      <br/>
      <Container className={classes.cardGrid} maxWidth="lg">
      <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={4} align="center" style={{height:'200px'}}>
          <h2>Movie & Series</h2>
          <img src="http://nishmaskey.com.np/img/zip.jpg" alt="Explore" className="hob-img"/>        
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} align="center" style={{height:'200px'}}>
          <h2>Animate</h2>
          <img src="http://nishmaskey.com.np/img/zip.jpg" alt="Explore" className="hob-img"/>             
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} align="center" style={{height:'200px'}}>
          <h2>Travel</h2>
          <img src="http://nishmaskey.com.np/img/zip.jpg" alt="Explore" className="hob-img"/>            
          </Grid>
        </Grid>
        </Container>
        
        <Container className={classes.cardGrid} maxWidth="lg">
        <Grid container spacing={2}>        
          <Grid item xs={12} sm={6} md={6} lg={4} align="center" style={{height:'200px'}}>
          <h2>Design</h2>
            <InstagramEmbed
              url="https://www.instagram.com/p/B_V3zTDFLg1/"
              maxWidth={320}
              hideCaption={true}
              containerTagName="div"
              protocol=""
              injectScript
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} align="center" style={{height:'200px'}}>
          <h2>Cook</h2>
            <InstagramEmbed
              url="https://www.instagram.com/p/B8fulJbhXOa/"
              maxWidth={320}
              hideCaption={true}
              containerTagName="div"
              protocol=""
              injectScript
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} align="center" style={{height:'200px'}}>
          <h2>Empower</h2>
            <InstagramEmbed
              url="https://www.instagram.com/p/B2UQbcCnqHZ/"
              maxWidth={320}
              hideCaption={true}
              containerTagName="div"
              protocol=""
              injectScript
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />            
          </Grid>
          </Grid> 
          
      </Container>
    </div>
  );
}
