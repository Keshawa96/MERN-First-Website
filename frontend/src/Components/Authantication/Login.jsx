import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppBar, Toolbar } from '@mui/material';
// import Link from '@mui/material/Link';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import red from '../Images/red.jpg';

// import { Link } from 'react-router-dom';

const defaultTheme = createTheme();

const UserSignIn = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);  // New state to track successful login
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setError('');  // Reset error on change
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/login', formData)
            .then(res => {
                localStorage.setItem('jwtToken', res.data.token);

                const decodedToken = jwtDecode(res.data.token);  // Decode the token
                const userRole = decodedToken.role;  // Extract the role

                const token = localStorage.getItem('jwtToken');
                axios.defaults.headers.common['Authentication'] = 'Bearer ' + token ;

                console.log('Login successful');
                
                setError('');
                setSuccess(true);

                // Check the role and navigate accordingly
                switch (userRole) {  // Change this line to use userRole
                    case 'admin':
                        navigate('/adminuserprofile');
                        break;
                    case 'user':
                        navigate('/userprofile');
                        break;
                    default:
                        console.error('Unknown role');
                        setError('Invalid role');
                }
            });
        } catch (err) {
            console.error('Login failed', err.response.data);
            setError(err.response.data.message);
            setSuccess(false);
        }
    };



//edede
// const defaultTheme = createTheme();

// export default function UserSignIn() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate()

  
    
//     const handleSubmit = (e) => {
//         e.preventDefault()
//         axios.post("http://localhost:5000/login", { email, password })
//         .then(result => {
//             console.log(result)
//             if(result.data === "Success"){
//                 console.log('Login successful');
//                 navigate("/UserProfile")
//             }else{
//                 console.error('Login failed');
//                 alert("You are not registered to this service")

//             }
       
//         })
//         .catch(err => console.log(err))
//     }

  return (
    <div >
      <Box 
       sx={{backgroundImage:`url(${red})`,
       backgroundRepeat: "no-repeat",
       backgroundSize: "cover",
       height: "100%" ,
      width:"100%"}}
    
    
    >
      <Box sx={{ flexGrow: 1}}>
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
          <Box
            sx={{
              marginTop: 10,
              marginBottom: 19.125,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar> */}
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={formData.email} onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={formData.password} onChange={handleChange}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button type="submit" style={{ backgroundColor: 'rgba(255,255,255,0)', opacity: '1' }} onSubmit={handleSubmit} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Sign In
              </Button>
              {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>Login successful!</p>}  {/* Display success message */}
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2" style={{ color:"black" , textDecoration: 'none'}}>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item textAlign={'center'}>
                  <Link to="/registration" style={{ color:"black" , textDecoration: 'none'}} variant="body2" >
                    Don't have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
            </Box>
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

export default UserSignIn;