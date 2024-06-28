import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, IconButton, Drawer, List, ListItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./Header.module.scss";
import { RoutingURLs } from "../common/RoutingURLs";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setDrawerOpen(false);
    navigate(tabName)
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <Box className={styles.header}>
      <IconButton className={styles.menu_icon} onClick={toggleDrawer(true)}>
        <MenuIcon sx={{ color: "white" }} />
      </IconButton>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem onClick={() => handleTabClick(RoutingURLs.dashboard)}>
              Dashboard
            </ListItem>
            <ListItem onClick={() => handleTabClick(RoutingURLs.tailoredForecast)}>
              Tailored Forecast
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box className={styles.brand_name}>Weather Forecast</Box>
      <Box className={styles.tabs}>
        <Box
          className={`${styles.tab} ${
            activeTab === RoutingURLs.dashboard ? styles.active : ""
          }`}
          onClick={() => handleTabClick(RoutingURLs.dashboard)}
        >
          Dashboard
        </Box>
        <Box
          className={`${styles.tab} ${
            activeTab === RoutingURLs.tailoredForecast ? styles.active : ""
          }`}
          onClick={() => handleTabClick(RoutingURLs.tailoredForecast)}
        >
          Tailored Forecast
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
