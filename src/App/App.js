import React from "react";
import "./App.css";
import SideMenu from "../components/SideMenu";
import { makeStyles } from "@mui/styles";
import Header from "../components/Header";
import { CssBaseline } from "@mui/material";
// import Body from "../components/Body";
import MyGrid from "../components/MyGrid";
import MyCard from "../components/MyCard";
import DataTable from "../components/DataTable";

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
});

function App() {
  const classes = useStyles();
  return (
    <>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
        <MyGrid />
        <MyCard />
        <DataTable />
        {/* <Bod  y /> */}
      </div>
      <CssBaseline />
    </>
  );
}

export default App;
