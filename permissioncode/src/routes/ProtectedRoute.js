import React from 'react';
import { Route, Redirect } from 'react-router-dom'; // Assuming you're using react-router
import { useAuth } from '../contexts/AuthProvider';

const ProtectedRoute = ({ component: Component, allowedRoles, ...rest }) => {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={props => {
        if (user && allowedRoles.includes(user.role)) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />; // Or another route if not authenticated
        }
      }}
    />
  );
};
