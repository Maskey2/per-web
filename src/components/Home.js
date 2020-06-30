import React from "react";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { Link } from "react-router-dom";


export default function Home() {

  return (
    <div className="App" style={{ display: "flex", alignItems: "center" }}>
      <Container maxWidth="lg" style={{ flexBasis: "none" }}>
        <Grid container spacing={6}>
          <Grid item xs={12} lg={6}>
            <div className="animate__animated animate__lightSpeedInLeft  fontd"
            style={{ border:'1px solid white',  cursor:'pointer'}}
              onClick = {() => {document.getElementById("who").style.display = "block"; }}>
            <p
              style={{ color: "white" }}              
            >
              Knock Knock  <FiberManualRecordIcon style={{ color:'white', float:'right', verticalAlign:'middle', padding:'20px'}} className="animate__animated animate__wobble animate__delay-1s"/>
            </p>
           
            
            </div>
            <p style={{ color: "white" }} className="animate__animated animate__fadeInDown animate__delay-2s ">Click me !</p>
          </Grid>
          <Grid  item
            xs={12}
            lg={6}>
               <div  >
             <p 
             id="who" style={{color: "white" , cursor:'pointer', 
             display:'none'
            }}
             className="animate__animated animate__rollIn  fontd"
             onClick = {() => {document.getElementById("nishma").style.display = "block"; }}
              
            >
            Who's there?</p>
           
            </div>
          </Grid>
        </Grid>

        <Grid container spacing={6}>
        <Grid  item
            xs={12}
            lg={12}>
              alignItems="center"
             <p id="nishma" 
              style={{ color: "white" , cursor:'pointer',
              display:'none'
              }}
              className="animate__animated animate__zoomInUp  fontd"
              onClick = {() => {document.getElementById("nishmaw").style.display = "block"; }}
            > 
            Nishma</p>
          </Grid>
        </Grid>

        <Grid container spacing={6}>
        <Grid  item
            xs={12}
            lg={6}>
             <p id="nishmaw"
              style={{ color: "white" , cursor:'pointer', 
              display:'none'
            }}
              className="animate__animated animate__jackInTheBox  fontd"
              onClick = {() => {document.getElementById("de").style.display = "block"; }}
            >
            Nishma, who?</p>
          </Grid>
          <Grid  item
            xs={12}
            lg={6}>
             <p id="de"
              style={{ color: "white" , cursor:'pointer', 
              display:'none'
            }}
              className="animate__animated animate__wobble  fontd"
              
            >
              <Link to="/dashboard">
            Find out!</Link></p>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
