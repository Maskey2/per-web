
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {  Link } from "react-router-dom";
import {animateScroll as scroll} from 'react-scroll';
import { Box } from '@material-ui/core';

function Copyright() {
  return (
    <Typography component={'span'} variant="body2" style={{color: '#aaadaa'}}>
       <Box display={{ xs: 'block', sm: 'none' }}><br/></Box>
      {'Copyright ©     '}
      
         NM
      
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
    '@global': {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
    },
    footer: {
      borderTop: `1px solid ${theme.palette.divider}`,     
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(3),
      [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
      },
    },
    headerlink:{
      textDecoration: 'none',
      fontSize: '25px',
  },
    link:
    {
      textDecoration: 'none',
      color: 'black',
      fontSize: '18px',
      lineHeight:'1.5',
      [theme.breakpoints.down('md')]: {
        fontSize: '14px',
      }
    },
    textfield:{
      margin: '5px',
      backgroundColor: 'white',
      color: '#213C54',
      borderRadius: '20px',
      paddingLeft: '8px'
  },
    signup:{
      border: '2px solid white', 
      padding: '4px',
      margin: '3px',
    }, 
  }));

  const handleClick = (event) => {
    scroll.scrollToTop();
  };

 
export default function Footer() {
  const classes = useStyles(); 
  return (
    <Grid style={{backgroundColor: '#e4e4e4'}}>
    <Container maxWidth="lg" component="footer" className={classes.footer} >
        <Grid container spacing={2}>        
            <Grid item xs={6} sm={3} md={4} lg={4} >
              <Typography component={'span'} className={classes.headerlink}>
               NM               
              </Typography>
              <ul>    
              <Link to='/' className={classes.link} onClick={handleClick}><li>Home  </li></Link>   
              <a href='/#about' className={classes.link}><li>About  </li>  </a>     
              <a href='/#contact' className={classes.link}><li>Contact  </li> </a>           
              </ul>
            </Grid>  
            <Grid item xs={6} sm={3} md={4} lg={4}>
              <Typography component={'span'} gutterBottom className={classes.headerlink}>                
               We... 
              </Typography>                 
              <ul>    
              <Link to='/design&develop' className={classes.link}><li>Jokes  </li></Link>  
              <Link to='/manufacture' className={classes.link}><li>Quotes </li></Link>
              <Link to='/distribute' className={classes.link}><li>Contact  </li></Link>
              <Link to='/ourbrands' className={classes.link}><li>Donate </li></Link>
              </ul>              
            </Grid>  
            <Grid item xs={12} sm={6} md={4} lg={4}>
              
               
               <Typography component="h2" className={classes.headerlink} style={{paddingLeft:'5px', paddingBottom: '5px', fontSize: '22px'}}> C O N T A C T   {" "} M E </Typography>             
                       
           
        </Grid>
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
        <Grid style={{paddingBottom: '30px'}}></Grid>
      </Container>
      </Grid>
  );
}