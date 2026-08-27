import './css/App.css';
import React from "react";
import Navbar from "./pages/navbar";
import Main from "./main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import Experience from "./pages/experience";
import Projects from "./pages/projects";
import Other from "./pages/other";
import ChefBoy from "./pages/projects/chef-boy";
import ToonyWars from "./pages/projects/toony-wars";

const App = () => {

  return (

      <div>
          <Navbar />
          <Main />

      </div>
  );
}

export default App;
