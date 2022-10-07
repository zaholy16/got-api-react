import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './styles.navBar.css'
import { Logos } from './logos/logos';

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }}}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <div className='navBar'>
              <img src="./stark.svg" width={100} height={50} alt="" />
              <p>GOT API</p>
            </div>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
           <div className='houses-logo'>
              <Logos />
           </div>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ p: 6 }}>
      </Box>
    </Box>
  );
}

export {NavBar};