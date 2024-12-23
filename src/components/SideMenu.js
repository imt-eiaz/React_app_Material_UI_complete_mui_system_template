import { makeStyles, withStyles } from "@mui/styles";
import React from "react";

const style = {
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "0px",
    width: "320px",
    height: "1200px",
    backgroundColor: "#14A44D",
  },
};

const SideMenu = (props) => {
  const { classes } = props;
  return <div className={classes.sideMenu}></div>;
};

export default withStyles(style)(SideMenu);
