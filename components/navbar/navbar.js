// import React from "react";
// import {
//   AppBar,
//   Toolbar,
//   CssBaseline,
//   makeStyles,
//   Typography,
//   useTheme,
//   useMediaQuery
// } from "@material-ui/core";
// import DrawerComponent from "./drawer";
// import Link from "next/link";

// const useStyles = makeStyles((theme) => ({
//   navlinks: { marginLeft: theme.spacing(10), display: "flex" },
//   logo: { flexGrow: "1", cursor: "pointer" },
//   Link: {
//     textDecoration: "none",
//     color: "white",
//     fontSize: "20px",
//     marginLeft: theme.spacing(2),
//     "&:hover": { color: "yellow", borderBottom: "1px solid yellow" }
//   }
// }));

// export const Navbar=()=> {
//   const classes = useStyles();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));

//   return (
//     <AppBar position="static"style={{background:"#722222", color:"white", display:"flex"}}>
//       <CssBaseline />
//       <Toolbar >
//         <Typography variant="h4" className={classes.logo} style={{padding:"15px"}}>
//           TravelGateX
//         </Typography>
        
//             <div className={classes.navlinks} style={{ margin: "10px", fontSize:"20px", display:"flex", justifyContent:"space-between" }}  >
//               <div style={{ margin: "10px", padding: "10px" }}>
//             <Link  href="/" className={classes.link} textDecoration="none">
//               Home
//                 </Link>
//               </div>
//               <div style={{ margin: "10px", padding: "10px" }}>
//             <Link href="/about" className={classes.link}>
//               AboutUs
//               </Link>
//               </div>
//               <div style={{ margin: "10px", padding: "10px" }}>
//             <Link href="/contact" className={classes.link}>
//               ContactUs
//                 </Link>
//               </div>
//               <div style={{ margin: "10px", padding: "10px" }}>
//             <Link href="/faq" className={classes.link}>
//               FAQ
//                 </Link>
//                 </div>
//           </div>
//             </Toolbar>
//     </AppBar>
//   );
// }

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Link from 'next/link';

const pages = ['Home', 'ContactUs', 'AboutUs' ,'FAQ'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const Navbar=()=> {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{background:"#722222"}}>
      <Container maxWidth="xl" sx={{background:"#622724",}}>
        <Toolbar disableGutters >
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              pr: 5,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 800,
              letterSpacing: '.5rem',
              color: 'white',
              textDecoration: 'none',
              fontSize:"medium"
            }}
          >
            TravelGateX
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
              fontSize:"15px"
            }}
          >
        TravelGateX
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, }}>
            <Tooltip title="User Settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Guest" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
                
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" >{setting}</Typography>
                  </MenuItem>
              ))} */}
               {/* <MenuItem onClick={handleCloseUserMenu} sx={{color:"white", display:"flex",flexDirection:"column", width:"120px",alignItems:"start", padding:"10px"}}> */}
                  {/* <Typography textAlign="center" >{setting}</Typography> */}
               <Typography variant='div' sx={{color:"white", display:"flex",flexDirection:"column", width:"120px",alignItems:"start", padding:"10px"}}> 
               <MenuItem> <Link href="/">Home</Link></MenuItem>
               <MenuItem>   <Link href="/Profile">Profile</Link></MenuItem>
                <MenuItem> <Link href="/edit">Edit</Link></MenuItem>
                 <MenuItem><Link href="/logout">Logout</Link></MenuItem>
                  </Typography>
                {/* </MenuItem> */}
                          </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}



// // import styles from "../../styles/Home.module.css"
// // export const Navbar = () => {
// //     return (
// //         <>
// //             <Typography className="styles.container">
// //             {/* <div>Home</div>
// //             <div>Login</div>
// //             <div>Contact us</div> */}
// //             </div>
// //         </>
// //     )
// // }