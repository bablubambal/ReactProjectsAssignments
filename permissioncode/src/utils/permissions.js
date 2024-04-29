const componentPermissions = {
    stats: ['user', 'admin', 'superadmin', 'boss'],
    details: ['admin', 'superadmin', 'boss'],
    graphs: ['superadmin', 'boss'],
    other: ['user', 'boss','admin']
  };
  
  export const canAccess = (role, componentName) => {
    const allowedRoles = componentPermissions[componentName] || [];
    return allowedRoles.includes(role);
  };
  