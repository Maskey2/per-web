import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Container } from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Navbar from "./../Navbar";
import Graphic from './Graphic'
import Footer from "../Footer";

const useStyles = makeStyles((theme) => ({
  bultitle: {
    color: "white",
    fontSize: "26px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
    },
  },
  pagecontent: {
    fontSize: "14px",
  },
  pagesubtitle: {
    fontSize: "22px",
  },
  portimg:{
      height:'400px',
      margin:'10px'
  }
}));

export default function Portfolio() {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Container className={classes.cardGrid} maxWidth="md" >
        <h1 className="animate__animated animate__flipInX">Web Development Projects</h1>
        <ExpansionPanel
          defaultExpanded={false}
          style={{ backgroundColor: "#2ec4b6", margin: "0px", padding: "0px" }}
        >
          <ExpansionPanelSummary
            style={{ height: "15px" }}
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography component={"span"}>
              <p className={classes.bultitle} style={{backgroundColor:'#2ec4b6'}}>
                Lion's Feed
              </p>
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{ backgroundColor: "#ffffff" }}>
              <div align="center" style={{display:'flex', justifyContent:'center'}}>
              <img src="https://doc-0c-6g-docs.googleusercontent.com/docs/securesc/nkiafnpa8jarlb89p81gro9mo5qmo4g0/ulr2pco5ioqvc82re344rlesmqd46q48/1593549150000/13368117630395897672/16737079881966871547/1nvPVfh3VptldCGoLhkzWWSwNTtfGdPmD?authuser=0&nonce=m3dtdqnu7vnr8&user=16737079881966871547&hash=d3c7e279h65f20e945touks4vk41msbv" alt="Lion"
              className={classes.portimg} />
              </div><br/>
            <div>
            Lion's Feed is the semester long group project (four members) in CMPS 285- Software Engineering class.
              <ul style={{ listStyleType: "disc", paddingLeft: "30px" }}>
                <li>
                'Lions Feed' is built in MVC - ASP.Net Core 2.0 environment using Visual Studio 2017.
                </li>
                <li>Lion's Feed is a platform for Southeastern Louisiana University students to share their creativity via posts which includes texts and images.</li>
                <li>It is a social networking website for students with the functionality of Home, User Profile, activities such as like, comments, etc.</li>
              </ul>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <br/>
       {/* lions feed end */}
        <ExpansionPanel
          defaultExpanded={false}
          style={{ backgroundColor: "#EB9647", margin: "0px", padding: "0px" }}
        >
          <ExpansionPanelSummary
            style={{ height: "15px" }}
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography component={"span"}>
              <p className={classes.bultitle}>
                iForgot
              </p>
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{ backgroundColor: "#ffffff" }}>
              <div align="center" style={{display:'flex', justifyContent:'center'}}>
              <img src="https://doc-0c-6g-docs.googleusercontent.com/docs/securesc/nkiafnpa8jarlb89p81gro9mo5qmo4g0/4rudr3mdv0f398vrjlo9kkj6hka3tu7j/1593549225000/13368117630395897672/16737079881966871547/1aaei3DC8RohDHeZpqb9oIwSHDZG3UuL7?authuser=0" alt="Lion"
              className={classes.portimg} />
              </div><br/>
            <div>
            iForgot is the group project in CMPS 401- Survey of Programming Languages class.
              <ul style={{ listStyleType: "disc", paddingLeft: "30px" }}>
                <li>
                'iForgot' is built in MVC - ASP.Net environment using Visual Studio 2017.
                </li>
                <li>iForgot is a schedule reminder app with functionality of reminding people about their dues via email/ messages.</li>
                <li>It is a web-app where users are able to CRUD (Create/ Edit/ Update/ Delete) the events.</li>
                <li>Designed a logo for the web- app, developed responsive front- end and helped with the server side.</li>
              </ul>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
<br/> {/* iforgot feed end */}
<ExpansionPanel
          defaultExpanded={false}
          style={{ backgroundColor: "#8CB26C", margin: "0px", padding: "0px" }}
        >
          <ExpansionPanelSummary
            style={{ height: "15px" }}
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography component={"span"}>
              <p className={classes.bultitle}>
                Women in Technology
              </p>
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{ backgroundColor: "#ffffff" }}>
              <div align="center" style={{display:'flex', justifyContent:'center'}}>
              <img src="https://doc-0c-6g-docs.googleusercontent.com/docs/securesc/nkiafnpa8jarlb89p81gro9mo5qmo4g0/4rudr3mdv0f398vrjlo9kkj6hka3tu7j/1593549225000/13368117630395897672/16737079881966871547/1aaei3DC8RohDHeZpqb9oIwSHDZG3UuL7?authuser=0" alt="WIT"
              className={classes.portimg} />
              </div><br/>
            <div>
            Women in Technology is the non-profit organization at Southeastern Louisiana University with the motive of empowering more women in Technology.
              <ul style={{ listStyleType: "disc", paddingLeft: "30px" }}>
                <li>
                This website is built with React library with Material UI.
                </li>
                <li>It has separate components for each subdomain About, Contact, Discussion, Donate, Gallery, Board with separte stylesheet for each.</li>
                <li>Used webpacks and other packages like BrowserRouter for Routing, Carousel, Jotform, etc.</li>               
              </ul>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
<br/>
<Grid container justify="center" spacing={2}>
    <Grid item lg={6} xs={12}>
    <ExpansionPanel
          defaultExpanded={false}
          style={{ backgroundColor: "#465775", margin: "0px", padding: "0px" }}
        >
          <ExpansionPanelSummary
            style={{ height: "15px" }}
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography component={"span"}>
              <p className={classes.bultitle}>
                Countdown App
              </p>
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{ backgroundColor: "#ffffff" }}>
              <div align="center" style={{display:'flex', justifyContent:'center'}}>
              <img src="https://doc-0c-6g-docs.googleusercontent.com/docs/securesc/nkiafnpa8jarlb89p81gro9mo5qmo4g0/ulr2pco5ioqvc82re344rlesmqd46q48/1593549150000/13368117630395897672/16737079881966871547/1nvPVfh3VptldCGoLhkzWWSwNTtfGdPmD?authuser=0&nonce=m3dtdqnu7vnr8&user=16737079881966871547&hash=d3c7e279h65f20e945touks4vk41msbv" alt="Lion"
              className={classes.portimg} />
              </div><br/>
            <div>
            A React app that counts down the given time

              <ul style={{ listStyleType: "disc", paddingLeft: "30px" }}>
                <li>
                Learnt the concepts function based and class based components.
                </li>
                <li>Implemented various Life cycle methods of React like ComponentDidMount and ComponentWillMount</li>
                <li>Understood event handlers, props and also the concept of React Hooks</li>
              </ul>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
    </Grid>
    <Grid item lg={6} xs={12}>
    <ExpansionPanel
          defaultExpanded={false}
          style={{ backgroundColor: "#ffca3a", margin: "0px", padding: "0px" }}
        >
          <ExpansionPanelSummary
            style={{ height: "15px" }}
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography component={"span"}>
              <p className={classes.bultitle}>
                Reminder App
              </p>
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{ backgroundColor: "#ffffff" }}>
              <div align="center" style={{display:'flex', justifyContent:'center'}}>
              <img src="https://doc-0c-6g-docs.googleusercontent.com/docs/securesc/nkiafnpa8jarlb89p81gro9mo5qmo4g0/ulr2pco5ioqvc82re344rlesmqd46q48/1593549150000/13368117630395897672/16737079881966871547/1nvPVfh3VptldCGoLhkzWWSwNTtfGdPmD?authuser=0&nonce=m3dtdqnu7vnr8&user=16737079881966871547&hash=d3c7e279h65f20e945touks4vk41msbv" alt="Lion"
              className={classes.portimg} />
              </div><br/>
            <div>
            Reminer App is a web application made by using React and Redux
              <ul style={{ listStyleType: "disc", paddingLeft: "30px" }}>
                <li>
                Learnt concepts of Redux, store, constant, action creator and a reducer.
                </li>
                <li>Implemented the idea of cookies via sfcookies package.</li>
                <li>Implemented JS Date and moment to simpplify the view for human eyes</li>
              </ul>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        </Grid>
</Grid>

        <br/>
        <Grid>            
        </Grid>
        <Graphic/>
      </Container>

      <Footer/>
    </div>
  );
}
