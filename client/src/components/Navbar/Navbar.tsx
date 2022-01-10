import React, { useState } from 'react';
import { useAuth } from '../../context/useAuthContext';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import { Menu as MenuIcon, AccountCircle } from '@mui/icons-material';
import Button from '@mui/material/Button';
import { Person as ProfileIcon, Logout as LogoutIcon, Settings as SettingsIcon } from '@mui/icons-material';
import logo from '../../Images/logo.png';
import useStyles from './useStyles';

const Navbar: React.FC = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { loggedInUser, logout } = useAuth();

  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    logout();
  };

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar>
        <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
          <img src={logo} alt="logo" />
        </Typography>
        {loggedInUser && (
          <>
            <Button key={'Become a Sitter'} className={classes.baritems}>
              {'Become a Sitter'}
            </Button>
            <Button key={'Notifications'} className={classes.baritems}>
              {'Notifications'}
            </Button>
            <Button key={'My Bookings'} className={classes.baritems}>
              {'My Bookings'}
            </Button>
            <Button key={'Messages'} className={classes.baritems}>
              {'Messages'}
            </Button>
          </>
        )}
        {loggedInUser && (
          <>
            <IconButton
              className={classes.userMenu}
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenuOpen}
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <SettingsIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Settings</ListItemText>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <ProfileIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Profile</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <LogoutIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Logout</ListItemText>
              </MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export { Navbar };
