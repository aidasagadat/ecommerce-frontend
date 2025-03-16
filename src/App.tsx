import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, ThemeProvider } from "@mui/material";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import Navbar from "./customer/Navbar/Navbar";
import customeTheme from "./theme/customTheme";
import Home from "./customer/pages/Home/Home";
import Product from "./customer/pages/Product/Product";

function App() {
  return (
    <ThemeProvider theme={customeTheme}>
      <div>
        <Navbar />
        {/* <Home /> */}
        <Product />
      </div>
    </ThemeProvider>
  );
}

export default App;
