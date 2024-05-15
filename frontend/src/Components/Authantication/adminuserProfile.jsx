import React, { useState, useEffect } from 'react';
import {  Typography, Card, CardContent, Button, Grid, Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import axios from 'axios';
import en2 from '../Images/en2.jpeg';
import prof1 from '../Images/prof1.jpg';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import Admin from '../Images/Admin.png';

const AdminUserProfile = () => {
    const [userData, setUserData] = useState([]); // State to hold user data
    const [error, setError] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        if (!token) {
            setError('User not logged in');
            return;
        }
        
        axios.defaults.headers.common['Authentication'] = 'Bearer ' + token;
        axios.defaults.headers.common['Authorization'] = 'Bearer ';

        // Fetch user data
        axios.get(`http://localhost:5000/adminuserprofile`) // Endpoint to fetch user info
            .then(res => {
                if (res.data.status === 'success') {
                    setUserData(res.data.data);
                    setError('');
                } else {
                    setError('Error fetching user data');
                    setUserData(null);
                }
            })
            .catch(error => {
                setError('Error fetching user data from server');
                setUserData(null);
            });
    }, []); 


    return (
        <div>
          <Box
           sx={{backgroundImage:`url(${en2})`,
           backgroundRepeat: "no-repeat",
           backgroundSize: "cover",
           height: "100%" ,
          width:"100%" ,
          marginTop: 0,
          marginBottom: 0}}
          
          >
          <Grid container spacing={3}>
            <Grid item xs={12}>
            <Box sx={{ flexGrow: 1 }}>
            
            <AppBar position="static" style={{ backgroundColor: 'rgba(0,0,0,0.5)', opacity: '1' }}>
              <Toolbar>
                <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                  <Link to='../'  style={{ color: 'white', textDecoration: 'none' , fontFamily:"Big Space"}}>
                  GameArena
                  </Link>
                </Typography>
                <Button color="inherit" ><Link to='/newsFeed' style={{ color: 'white', textDecoration: 'none' }}>Game Store</Link></Button>
                <Button color="inherit">Library</Button>
              </Toolbar>
            </AppBar>
          </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card style={{ backgroundColor: 'rgba(0,0,0,0.5)', opacity: '1' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' , textAlign: 'center', height:525}}>
                    <Box mt={12} >
                      {userData && (
                        <>
                          <Avatar alt="Profile Picture" src={Admin} style={{ width: 170, height: 170 , marginLeft: 6}} />
                          <Box sx={{  marginTop: 0,
                            marginBottom: 0, alignItems: 'center', textAlign: 'center', height:200}}>
                          <Typography variant="subtitle1" color="textSecondary" sx={{alignItems: 'center', textAlign: 'center', fontSize:22 , color:"white", }}>Hi {userData.firstName}  !</Typography>
                          <Typography variant="subtitle1" color="textSecondary" sx={{alignItems: 'center', textAlign: 'center', fontSize:22 , color:"white"}}>Welcome to GameArena </Typography>
                          <Typography variant="body2" color="textSecondary"><p></p></Typography>
                          <Button variant="contained" color="primary"><Link to='/fileup' style={{ color: 'white', textDecoration: 'none' }}>AddGames</Link></Button>
                          
                          </Box>
                        </>
                      )}
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Card style={{ backgroundColor: 'rgba(0,0,0,0.5)', opacity: '1' }}>
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Typography variant="h6" gutterBottom style={{ color:"white" }}>User : {userData.firstName} {userData.lastName} </Typography>
                      <Typography variant="h6" gutterBottom style={{ color:"white" }}>E-mail:{userData.email}</Typography>
                      <Typography variant="body2" color="textSecondary"></Typography>
                      {/* Repeat for other user details */}
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
              <Grid container spacing={3} sx={{ mt: 3 }}>
                <Grid item xs={12} sm={6}>
                  
                </Grid>
                <Grid item xs={12} sm={6}>
                  {/* Repeat similar card for another set of projects */}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {error && <p style={{color: 'red'}}>{error}</p>}
          <Box sx={{ flexGrow: 1 , marginTop: 0,
          marginBottom: 0 }}>
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

export default AdminUserProfile;
