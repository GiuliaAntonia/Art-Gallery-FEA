import React from "react";
import { Navigate, Outlet, useLocation, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

// const Protected = ({ component: Component, ...rest }) => {
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

//   return (
//     <Routes>
//       <Route
//       {...rest}
//       render={(props) =>
//         isAuthenticated ? <Component {...props} /> : <Navigate to="/login" />
//       }
//     />
//     </Routes>
//   );

const Protected = (props) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const location = useLocation();

  // List of public routes
  const publicRoutes = ['/', '/login'];

  // Check if the current route is public
  const isPublicRoute = publicRoutes.includes(location.pathname);

  if (!isAuthenticated && !isPublicRoute) {
    // User is not authenticated and the route is not public
    return <Navigate to={props.redirectTo} replace />;
  }

  return <Outlet />;
};

export default Protected;
