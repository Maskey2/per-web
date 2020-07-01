import React from 'react'
import Navbar from './../Navbar'
import Footer from '../Footer'
import { Container, Typography } from '@material-ui/core'

export default function Extra() {
    return (
        <div>
            <Navbar/>
            
            <Container maxWidth="md" >
            <div style={{margin:'10px auto'}} align="center" className="animate__animated animate__bounce ">
            <img src="https://66.media.tumblr.com/91c7581b8e7752c2104e47b3dcf8301f/adbb1ebe2da7cbc7-1f/s400x600/8fd8266b360974eed357ad6a4518f723ebdf7dc4.gifv" alt=""/>
        </div>

        <Typography align="center">
            <p style={{fontSize:'40px'}}>Contact Me</p>
            <h4>Email: maskeynishma@gmail.com</h4>
            <h4>Connect with me in <br/>LinkedIn<br/>Facebook<br/>Instagram</h4>
        </Typography>
                </Container>
           
        <Footer/>
        </div>
    )
}
