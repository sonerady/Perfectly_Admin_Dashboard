import React from "react";
import "./App.scss";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import RouteData from "./config/Route";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <Router>
      <RouteData />
    </Router>
  );
};

export default App;
