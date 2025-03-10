import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "@mui/material";
import Diversity2Icon from "@mui/icons-material/Diversity2";

function App() {
  return (
    <div className="p-20">
      <h1 className="font-bold text-5xl">Code with Aida</h1>

      <Button variant="contained">Code with Aida</Button>

      <Diversity2Icon></Diversity2Icon>
    </div>
  );
}

export default App;
