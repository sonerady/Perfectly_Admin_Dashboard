import React from "react";
import "./App.scss";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import RouteData from "./config/Route";

const App = () => {
  return (
    <Router>
      <RouteData />
    </Router>
  );
};

export default App;
