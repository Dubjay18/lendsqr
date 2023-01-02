import React from "react";
// import { Route, Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import InAppLayout from "../layout/inAppLayout";

const AppRoute = ({ component: Component, isAuthProtected, ...rest }:{isAuthProtected?:boolean;component?:any;}) => (
  <Route
    {...rest}
    />
);

export default AppRoute;
