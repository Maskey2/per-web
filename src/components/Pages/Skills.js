import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Navbar from './../Navbar'

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  img: {
    height:'200px'
  }
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
            <Grid item xs={6} sm={6} md={4} lg={3} align="center">
              <img className="skill-img animate__animated animate__lightSpeedInLeft"  
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a8630c5f-6e77-4132-ae49-efd987a44020/dake8d1-5a55fb49-3b92-4387-8699-75703019948a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYTg2MzBjNWYtNmU3Ny00MTMyLWFlNDktZWZkOTg3YTQ0MDIwXC9kYWtlOGQxLTVhNTVmYjQ5LTNiOTItNDM4Ny04Njk5LTc1NzAzMDE5OTQ4YS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.berRABM_UVULOx_H4b48aQBV_X1WZZ8Sv2udxNJC8mU"
                alt="PS"
                
              />
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={3} align="center">
                <img className="skill-img animate__animated animate__jackInTheBox " 
                src="https://cdn.mos.cms.futurecdn.net/KQPV2TFnwvt5K4KBzGMHAF-1200-80.png"
                alt="PS"
                
              />
            </Grid>

            <Grid item xs={6} sm={6} md={4} lg={3} align="center">
                <img className="skill-img animate__animated animate__rollIn" 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Adobe_InDesign_CC_icon.svg/1200px-Adobe_InDesign_CC_icon.svg.png"
                alt="PS"
                
              />
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={3} align="center">
                <img className="skill-img animate__animated animate__zoomIn" 
                src="https://cdn.worldvectorlogo.com/logos/react.svg"
                alt="PS"
                
              />
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={3} align="center">
                <img className="skill-img animate__animated animate__slideInLeft" 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"
                alt="PS"
                
              />
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={3} align="center">
                <img className="skill-img animate__animated animate__fadeInDown" 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
                alt="PS"
                
              />
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={3} align="center">
                <img className="skill-img animate__animated animate__fadeInLeft" 
                src="https://lh3.googleusercontent.com/proxy/QJ17XZdB32gZ5lzFZkt4aHcQDWmXr0TdqGaG4-vgp6Tc8rrF3fNvq-wSosSCK19SiGQGRFSClH8Mb0ctV2JDjTz5Z95eKjnLWzENMo6xPwZfcuvgdZZ0_ssAqy83PY-3IPnHOFAIdnt7GXA0T4h7YnIarMXzXk_x1hKssatMbK6v1_Vv3fqz"
                alt="PS"
                
              />
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={3} align="center">
                <img className="skill-img animate__animated animate__fadeInTopLeft" 
                src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png"
                alt="PS"
               
              />
            </Grid>
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
