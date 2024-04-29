import React from 'react';
import RoleBasedVisibility from '../components/RoleBasedVisibility';
import Stats from '../components/Stats';
import Details from '../components/Details';
import Graphs from '../components/Graphs';
import Other from '../components/Other';

const Dashboard = () => {
  return (
    <div>
        <h1>Dashboard</h1>
      <RoleBasedVisibility allowedRoles={['user', 'admin', 'superadmin', 'boss']}>
        <Stats />
      </RoleBasedVisibility>
      <RoleBasedVisibility allowedRoles={['admin', 'superadmin', 'boss']}>
        <Details />
      </RoleBasedVisibility>
      <RoleBasedVisibility allowedRoles={['superadmin', 'boss']}>
        <Graphs />
      </RoleBasedVisibility>
      <RoleBasedVisibility allowedRoles={['user', 'boss']}>
        <Other />
      </RoleBasedVisibility>
    </div>
  );
};

export default Dashboard;
