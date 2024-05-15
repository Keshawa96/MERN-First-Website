import React, { useState , useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import red from './Images/red.jpg';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import BottomNavigation from '@mui/material/BottomNavigation';
// import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import { useNavigate } from 'react-router-dom'; 
// import  { useContext } from 'react';
// import { AuthContext } from './LoginContext';
// import SignUp from './SignUp';
// import { NavLink, } from 'react-router-dom';
// import Link from '@mui/material/Link';
import { Link } from 'react-router-dom';
// import Link from '@mui/material/Link';
// import k from "./Images/k.jpg";
import g from "./Images/g.jpg";
import w from "./Images/w.jpg";
import en from "./Images/en.jpeg";
import bl1 from "./Images/bl1.jpg";
import bl2 from "./Images/bl2.jpg";
import './course.css';

export default function HomePage() {

  const Carousel = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0);
  
    const nextSlide = () => {
      setActiveIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const prevSlide = () => {
      setActiveIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };

    useEffect(() => {
      const intervalId = setInterval(nextSlide, 3000); // Change slide every 3 seconds
      return () => clearInterval(intervalId); // Clean up the interval on component unmount
    }, []); 
  
    return (
      <div className="carousel">
        <button onClick={prevSlide} className="carousel__btn carousel__btn--prev">
          &lt;
        </button>
        <img
          src={images[activeIndex]}
          alt={`Slide ${activeIndex}`}
          className="carousel__img"
        />
        <button onClick={nextSlide} className="carousel__btn carousel__btn--next">
          &gt;
        </button>
      </div>
    );
  };

  const images = [
    bl1,
    g,
    bl2,
    w,
  ];
  return (
    <div  >

      
    
<div >
      <Box 
       sx={{backgroundImage:`url(${en})`,
       backgroundRepeat: "no-repeat",
       backgroundSize: "cover",
       height: "100%" ,
      width:"100%",
    
    }}
    
    
    >
      <Box  sx={{
              marginTop: 0,
              marginBottom: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
        <AppBar position="static" style={{ backgroundColor: 'rgba(0,0,0,0.5)', opacity: '1' }}>
          <Toolbar >
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} >
              <Link to="../" style={{ color: 'white', textDecoration: 'none' , fontFamily:"Big Space" }}>
                GameArena
              </Link>
            </Typography>
            <Button color="inherit" ><Link to='/Login' style={{ color: 'white', textDecoration: 'none' }}>Login</Link></Button>
            <Button color="inherit">About Us</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Box 
       sx={{
        marginTop: 10,
        marginBottom: 0,
        marginLeft: 60,
        marginRight: 49,
        alignItems: 'center',
      }} style={{ backgroundColor: 'rgba(0,0,0,0.5)', opacity: '1' }}>
      <h1 style={{ color: 'white', textDecoration: 'none', fontFamily:"DRAGON HUNTER"}}>FEATURED & RECOMMENDED</h1>
      </Box>
      <Box
  sx={{
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 60,
    marginRight: 49,
    alignItems: 'center',
  }}
>
  <div style={{ border: '25px solid rgba(0,0,0,0.5)', borderRadius: 8 }}>
    
    <Carousel images={images} />
  </div>
</Box>
            
       

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
    


    </div>

    
  );
}