
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useState } from "react";
import red from '../Images/red.jpg';


const defaultTheme = createTheme();

export default function UserSignUp() {
  const [password, setPassword] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastName] = useState(""); // Added state for last name
  const [email, setEmail] = useState(""); // Added state for email
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isMatching, setIsMatching] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setIsMatching(value === password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      firstName,
      lastName,
      email,
      contactNumber: phoneNumber, // Changed from e.target.contactNumber.value
      password,
      confirmPassword,
    };

    console.log("Submitting data:", userData);

    try {
      const response = await axios.post("http://localhost:5000/users", userData);
      console.log(response.data);
    } catch (error) {
      console.error('Failed to sign up:', error);
    }
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    setPhoneNumber(value);
    const phoneRegex = /^[0-9]{10}$/;
    const isValidPhone = phoneRegex.test(value);
    if (!isValidPhone) {
      setPhoneError("Please enter a valid 10-digit phone number without spaces or dashes.");
    } else {
      setPhoneError("");
    }
  };

  return (
    <div>
      
      <Box 
       sx={{backgroundImage:`url(${red})`,
       backgroundRepeat: "no-repeat",
       backgroundSize: "cover",
       height: "100%" ,
      width:"100%"}}
    
    
    >

      <Box sx={{ flexGrow: 1 , marginTop: 0,
              marginBottom: 12,}}>
        <AppBar position="static" style={{ backgroundColor: 'rgba(0,0,0,0.5)', opacity: '1' }}>
          <Toolbar >
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} >
              <Link to="../" style={{ color: 'white', textDecoration: 'none' , fontFamily:"Big Space" }}>
                GameArena
              </Link>
            </Typography>
            {/* <Button color="inherit" >About us</Button>
            <Button color="inherit">Login</Button> */}
          </Toolbar>
        </AppBar>
      </Box>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box sx={{ marginTop: 0, marginBottom: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            
            <Typography component="h1" variant="h5" fontSize={45}>
              Sign up
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField autoComplete="given-name" value={firstName} name="firstName" required fullWidth id="firstName" label="First Name" onChange={e => setFirstname(e.target.value)} autoFocus />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField required fullWidth id="lastName" label="Last Name" name="lastName" autoComplete="family-name" value={lastName} onChange={e => setLastName(e.target.value)} />
                </Grid>
                <Grid item xs={12}>
                  <TextField required fullWidth id="email" label="Email Address" name="email" autoComplete="email" value={email} onChange={e => setEmail(e.target.value)} />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required fullWidth
                    name="contactNumber"
                    label="Contact Number"
                    type="tel"
                    id="contactNumber"
                    autoComplete="tel"
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit phone number without spaces or dashes."
                    
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                  />
                  {phoneError && <div style={{ color: "red" }}>{phoneError}</div>}
                </Grid>
                <Grid item xs={12}>
                  <TextField required fullWidth name="password" value={password} label="Password" type="password" id="password" autoComplete="new-password" onChange={handlePasswordChange} />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required fullWidth
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    autoComplete="new-password"
                    onChange={handleConfirmPasswordChange}
                  />
                  {!isMatching && <div style={{ color: "red" }}>Passwords do not match</div>}
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel control={<Checkbox value="allowExtraEmails" color="primary" />} label="I want to receive inspiration, marketing promotions and updates via email." />
                </Grid>
              </Grid>
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Sign Up</Button>
            </form>
            <Grid textAlign={'center'}>
              <Grid item>
                <Link  to="/Login" style={{ color:"black" , textDecoration: 'none'}}variant="body2">Already have an account? Sign in</Link>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </ThemeProvider>
      <Box sx={{ flexGrow: 1 }}>
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
}
