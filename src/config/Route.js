import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../pages/home/Home";
import List from "../pages/list/List";
import Login from "../pages/login/Login";
import New from "../pages/new/New";
import Single from "../pages/single/Single";

const RouteData = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/users", element: <List /> },
    { path: "/users/:userId", element: <Single /> },
    { path: "/users/new", element: <New /> },
    { path: "/products", element: <List /> },
    { path: "/products/:productId", element: <Single /> },
    { path: "/products/new", element: <New /> },
  ]);
  return routes;
};

export default RouteData;
