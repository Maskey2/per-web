import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Navbar from './../Navbar'

const useStyles = makeStyles((theme) => ({

  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
 
}));



export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Navbar/>
      <main>
        
        <Container className={classes.cardGrid} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>            
              <Grid item  xs={6} sm={6} md={6} lg={6} align="center">
              
               <img src="https://source.unsplash.com/random" alt="" style={{maxWidth:'400px'}} />
                                  
               
              </Grid>
              <Grid item  xs={6} sm={6} md={6} lg={6}>
              <h1 align="center">About Me</h1>
              <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et egestas neque. Sed vel libero suscipit, porta mi et, tempor arcu. Curabitur dapibus leo ac nibh feugiat, sed vehicula nulla consequat. Suspendisse potenti. Sed euismod ipsum ut metus consequat, at tincidunt mauris consectetur. Cras quis est at tortor pharetra porta. Duis convallis nunc sed sagittis elementum. Quisque commodo fringilla nulla a faucibus. Etiam mauris tellus, mattis non efficitur et, elementum quis sapien. Donec tempus id urna a consequat. Morbi id justo quis ipsum cursus finibus in vel odio. Duis sed facilisis nunc.
              </Typography>
              <br/>
              <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et egestas neque. Sed vel libero suscipit, porta mi et, tempor arcu. Curabitur dapibus leo ac nibh feugiat, sed vehicula nulla consequat. Suspendisse potenti. Sed euismod ipsum ut metus consequat, at tincidunt mauris consectetur. Cras quis est at tortor pharetra porta. Duis convallis nunc sed sagittis elementum. Quisque commodo fringilla nulla a faucibus. Etiam mauris tellus, mattis non efficitur et, elementum quis sapien. Donec tempus id urna a consequat. Morbi id justo quis ipsum cursus finibus in vel odio. Duis sed facilisis nunc.
              </Typography>
                                  
               
              </Grid>
           
          </Grid>
        </Container>
      </main>
     
    </React.Fragment>
  );
}