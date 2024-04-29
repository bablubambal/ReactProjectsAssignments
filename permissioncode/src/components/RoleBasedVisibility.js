import React from 'react';
import { useAuth } from '../contexts/AuthProvider';

const RoleBasedVisibility = ({ allowedRoles, children }) => {
  const { user } = useAuth();
  console.log(user)

  if (user && allowedRoles.includes(user.role)) {
    return <>{children}</>;
  }

  return null; // or <div>Access Denied</div>
};

export default RoleBasedVisibility