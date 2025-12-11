import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import Logo from "../Assets/Logo.png";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  // Define routes for navigation
  const menuOptions = [
    { text: "Home", icon: <HomeIcon />, path: "/home" },
    { text: "About", icon: <InfoIcon />, path: "/about" },
    { text: "Testimonials", icon: <CommentRoundedIcon />, path: "/testimonial" },
    { text: "Contact", icon: <PhoneRoundedIcon />, path: "/contact" },
    { text: "Cart", icon: <ShoppingCartRoundedIcon />, path: "/cart" },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="navbar-links-container">
        <Link to="https://1drv.ms/u/c/29d4595894e52f54/EUq6bEvkJcRJgQ7TjETPFfsBGp-8PaGQM8pXXnxdZKS10g?e=HzXHxc">Home</Link>
        <Link to="https://1drv.ms/u/c/29d4595894e52f54/EUCL3mX9CpVBijS-Thi2H-4Bl_UL-Ab2jyWIwX8uFwUmTw?e=kzkJaf">About</Link>
        <Link to="https://1drv.ms/v/c/29d4595894e52f54/Ecba69XQViZHkfzFnqPwdwYBZh8WvXpqga3PrJJ5dER9mg?e=Dwt3eo">Testimonials</Link>
        <Link to="/contact">Contact</Link>
        z
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      
      {/* Sidebar Drawer */}
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component={Link} to={item.path}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;

