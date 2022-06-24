import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            
            <Link to='/'>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Home_
               </Typography>
            </Link>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Productos>
               </Typography>
            <Link to='/ProductsByCategory/pantalon'>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Pantalon /
               </Typography>
            </Link>
            <Link to='/ProductsByCategory/remera'>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Remera /
               </Typography>
            </Link>
            <Link to='/ProductsByCategory/campera'>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Campera
               </Typography>
            </Link>

            <Button color="inherit">Login</Button>

              <Button color="inherit">
                <CartWidget/>
              </Button>

          </Toolbar>
        </AppBar>
      </Box>

    )


}

export default NavBar