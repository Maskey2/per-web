import React from "react";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Flippy, { FrontSide, BackSide } from "react-flippy";

const useStyles = makeStyles((theme) => ({
  boxes: {
    fontSize: "35px",
    fontFamily: "Dosis",
    color: "white",
    height: "200px",
    width: "300px",
    lineHeight: "180px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px",
      height: "140px",
      lineHeight: "140px",
      width: "150px",
    },
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const cards = [
  {
    id: 1,
    src: "https://source.unsplash.com/random",
    backsrc: "https://media2.giphy.com/media/Dr1ZZREmna8lTAmVwM/giphy.gif",
    title: "About Me",
    link: "/about",
    color: "#2ec4b6",
  },
  {
    id: 2,
    src: "https://source.unsplash.com/random",
    backsrc: "https://i.imgur.com/u0gwbTT.gif",
    title: "Skills",
    link: "/skills",
    color: "#EB9647",
  },
  {
    id: 3,
    src: "https://source.unsplash.com/random",
    backsrc:
      "https://thumbs.gfycat.com/PerfectCalculatingAxisdeer-size_restricted.gif",
    title: "Work ",
    link: "/workhistory",
    color: "#8CB26C",
  },
  {
    id: 4,
    src: "https://source.unsplash.com/random",
    backsrc: "https://i.gifer.com/9e7D.gif",
    title: "Portfolio",
    link: "/portfolio",
    color: "#465775",
  },
  {
    id: 5,
    src: "https://source.unsplash.com/random",
    backsrc:
      "https://thumbs.gfycat.com/GrouchyMelodicIsabellinewheatear-size_restricted.gif",
    title: "Hobbies ",
    link: "/hobbies",
    color: "#ffca3a",
  },
  {
    id: 6,
    src: "https://source.unsplash.com/random",
    backsrc:
      "https://tribereport.com/upload/media/entries/2016-01/31/25-6-063c8b2dc9ecb7ec7313cf38478d0248.gif",
    title: "Extra",
    link: "/extra",
    color: "#EF6F6C",
  },
];

export default function Dashboard() {
  const classes = useStyles();

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box display={{ xs: "none", sm: "block" }}>
      <Container maxWidth="lg" component="main" id="content">
        <Grid container spacing={2} alignItems="flex-end">
          {cards.map((card) => (
            <Grid item key={card.id} xs={6} md={4} sm={6}>
              <Flippy
                flipOnHover={true} // default false
                flipOnClick={false} // default false
                flipDirection="horizontal"
              >
                <FrontSide>
                  <CardContent>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Typography
                        align="center"
                        className={classes.boxes}
                        style={{
                          backgroundColor: card.color,
                        }}
                      >
                        {card.title}
                      </Typography>
                    </div>
                  </CardContent>
                </FrontSide>
                <Link to={card.link}>
                  <BackSide>
                    <CardMedia
                      component="img"
                      alt=""
                      height="240"
                      src={card.backsrc}
                    />
                  </BackSide>
                </Link>
              </Flippy>
            </Grid>
          ))}
        </Grid>
      </Container>
      </Box>
      
      <Box display={{ xs: "block", sm: "none" }}>
        <Container  maxWidth="md">
        <Grid container spacing={2} alignItems="flex-end">
        {cards.map((card) => (
            <Grid item key={card.id} xs={6} md={4} sm={6}>          
                  <Link to={card.link}>
                      <Typography
                        align="center"
                        className={classes.boxes}
                        style={{
                          backgroundColor: card.color,
                        }}
                      >
                        {card.title}
                      </Typography>
                      </Link>
            </Grid>
          ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
