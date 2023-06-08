import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial', }}>
      <CDBSidebar textColor="#fff" backgroundColor="linear-gradient(to bottom right, #16BFFD, #CB3066)">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            DocRising
          </a>
          
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/Dashboard" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Appointments" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="heartbeat">Appointments</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/AppointmentsReq" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="bullhorn">Appointments Requests</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
            </NavLink>

          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            DocRising ©
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;