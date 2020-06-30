import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Container } from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  bultitle: {
    backgroundColor: "black",
    color: "white",
    fontSize: "26px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
    },
  },
  pagecontent: {},
  pagesubtitle: {
    fontSize: "22px",
  },
}));

export default function Portfolio() {
  const classes = useStyles();
  return (
    <div>
      <h1>Graphic and Web Design Projects</h1>
      <ExpansionPanel
        defaultExpanded={false}
        style={{ backgroundColor: "black", margin: "0px", padding: "0px" }}
      >
        <ExpansionPanelSummary
          style={{ height: "15px" }}
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography component={"span"}>
            <p className={classes.bultitle}>Web Design Projects</p>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{ backgroundColor: "transparent" }}>
        <Grid container spacing={4}>
            <Grid item xs={6} sm={6} md={4} lg={3} align="center">
              <img className="skill-img animate__animated animate__lightSpeedInLeft"  
                src="https://cdn.mos.cms.futurecdn.net/KQPV2TFnwvt5K4KBzGMHAF-1200-80.png"
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
                <img className="skill-img animate__animated animate__jackInTheBox " 
                src="https://cdn.mos.cms.futurecdn.net/KQPV2TFnwvt5K4KBzGMHAF-1200-80.png"
                alt="PS"                
              />
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={3} align="center">
                <img className="skill-img animate__animated animate__jackInTheBox " 
                src="https://cdn.mos.cms.futurecdn.net/KQPV2TFnwvt5K4KBzGMHAF-1200-80.png"
                alt="PS"                
              />
            </Grid>
            </Grid>            
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <br />
      <ExpansionPanel
        defaultExpanded={false}
        style={{ backgroundColor: "black", margin: "0px", padding: "0px" }}
      >
        <ExpansionPanelSummary
          style={{ height: "15px" }}
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography component={"span"}>
            <p className={classes.bultitle}>Graphic Projects</p>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{ backgroundColor: "transparent" }}>
        <Grid container spacing={4}>
            <Grid item xs={6} sm={6} md={4} lg={3} align="center">
              <img className="skill-img animate__animated animate__lightSpeedInLeft"  
                src="https://cdn.mos.cms.futurecdn.net/KQPV2TFnwvt5K4KBzGMHAF-1200-80.png"
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
                <img className="skill-img animate__animated animate__jackInTheBox " 
                src="https://cdn.mos.cms.futurecdn.net/KQPV2TFnwvt5K4KBzGMHAF-1200-80.png"
                alt="PS"                
              />
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={3} align="center">
                <img className="skill-img animate__animated animate__jackInTheBox " 
                src="https://cdn.mos.cms.futurecdn.net/KQPV2TFnwvt5K4KBzGMHAF-1200-80.png"
                alt="PS"                
              />
            </Grid>
            </Grid>            
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <br />

      <br />
      <Grid></Grid>
    </div>
  );
}
