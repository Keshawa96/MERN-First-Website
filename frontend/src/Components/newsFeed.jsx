// ItemFeed.js

import React, { useState, useEffect } from 'react';
import { Grid, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';

import bl1 from './Images/bl1.jpg';
import super1 from './Images/super.jpg';
import tekken from './Images/tekken.jpg';
import axios from 'axios';



const items = [
  {
    id: 1,
    name: 'Boarderlands 3',
    // price: '$10',
    image: bl1,
    description: 'Description of item 1.',
    
  },
  {
    id: 2,
    name: 'Super Mario',
    // price: '$20',
    image: super1,
    description: 'Description of item 2.',
  },
  {
    id: 2,
    name: 'Tekken 7',
    // price: '$20',
    image: tekken,
    description: 'Description of item 2.',
  },
  // Add more items as needed
];


const Newsfeed = () => {

  const [messages, setMessages] = useState([]);  // Updated to handle an array of messages
    const [error, setError] = useState('');

    axios.get(`http://localhost:5000/newsFeed`)
    .then(res => {
        if (res.data.data.messages) {
            setMessages(res.data.data.messages.map(msg => msg.message));  // Directly setting array of messages
            setError('');
        } else {
            setError('Unexpected response format from server');
            setMessages([]);
        }
    })
    .catch(() => {
        setError('Error fetching messages from server');
        setMessages([]);
    });

  
  
  return (
    <div>


        <Box
        sx={{backgroundImage:`url(${bl1})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%" ,
       width:"100%",
     
     }}
        >
        <AppBar position="static" style={{ backgroundColor: 'rgba(0,0,0,0.5)', opacity: '1' }}>
          <Toolbar>
            
            <Typography variant="h4"  component="div" sx={{ flexGrow: 1 }}>
             
              <Link to='../' style={{ color: 'white', textDecoration: 'none' ,ontFamily:"Big Space"}}>
              GameArena
              </Link>
              
            </Typography>
            
            {/* <Button color="inherit">About us</Button>
            <Button color="inherit"><Link to='../SignIn' style={{ color: 'white', textDecoration: 'none' }}>Login</Link></Button> */}
          </Toolbar>
        </AppBar>
      
        <h1 style={{ color: 'white', textDecoration: 'none', fontFamily:"DRAGON HUNTER" , textAlign: 'center'}}>Game store</h1>
     
    <Grid container spacing={3}>
      {items.map(item => (
        <Grid item xs={12} sm={6} md={4} key={item.id} sx={{ marginY: 2 }}>
          <Card  style={{ backgroundColor: 'rgba(0,0,0,0.5)', opacity: '1' , color:'white'}}>
            
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={item.image}
                alt={item.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
                <Button variant="contained" color="primary">Download</Button>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
    

    <Grid container spacing={3}>
      {items.map(item => (
        <Grid item xs={12} sm={6} md={4} key={item.id} sx={{ marginY: 2 }} >
          <Card style={{ backgroundColor: 'rgba(0,0,0,0.5)', opacity: '1' , color:'white'}}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={item.image}
                alt={item.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
                <Button variant="contained" color="primary">Download</Button>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
    <Box  sx={{
              marginTop: 11.25,
              marginBottom: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
        <AppBar position="static" style={{ backgroundColor: 'rgba(0,0,0,0.5)', opacity: '0.9' }}>
          <Toolbar>
            <Container maxWidth="sm">
              <Typography variant="body2" color="white" align="center">
                {"Keshawa Kathriarachchi(Pvt) Ltd © "}
                {new Date().getFullYear()}
                {"."}
              </Typography>
            </Container>
          </Toolbar>
        </AppBar>
      </Box>
    </Box>
    </div>
  );
};

export default Newsfeed;
