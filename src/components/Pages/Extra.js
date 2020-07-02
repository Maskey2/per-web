import React from 'react'
import Navbar from './../Navbar'
import Footer from '../Footer'
import { Container, Typography } from '@material-ui/core'
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  img: {   
    height: "300px",
    [theme.breakpoints.down("sm")]: {
        height: "150px",
    },}
  }));
export default function Extra() {
    const classes = useStyles();
    return (
        <div>
            <Navbar/>
            
            <Container maxWidth="md" >
            <div style={{margin:'10px auto'}} align="center" className="animate__animated animate__bounce ">
            <img src="https://i.pinimg.com/originals/fe/97/8a/fe978afc2859e66ae305473a5ab91c4b.gif" alt="" className={classes.img}/>
        </div>

        <Typography align="center">
            
           
            <h1>Connect with me in </h1>
            <div>
            <p><EmailIcon style={{verticalAlign:'middle'}} fontSize="large"/> maskeynishma@gmail.com</p>  
                       <a href="https://www.linkedin.com/in/nishmamaskey/"  target="_blank"  style={{color:'black'}}><LinkedInIcon fontSize="large"/></a>
                       <a href="https://www.instagram.com/neesmamask"  target="_blank"  style={{color:'black'}}><InstagramIcon fontSize="large" /></a>
                       <a href="https://www.facebook.com/neesma.mask" target="_blank"  style={{color:'black'}}>  <FacebookIcon fontSize="large"/></a>
                    </div>
        </Typography>
                </Container>
           
        <Footer/>
        </div>
    )
}
