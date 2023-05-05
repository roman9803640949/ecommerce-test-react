import React from "react";
import { Navigate } from "react-router-dom";
import { getUser } from "../utils/auth-utils";

const PrivateRoute = (Component) => {
  const user = getUser();
  console.log("privateroute===:", user);
  return user ? Component : <Navigate to="/signup" />;
};

export default PrivateRoute;
