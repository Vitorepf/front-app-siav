import React from 'react';
import {
    CSidebar,
    CSidebarBrand,
    CSidebarNav,
    CNavItem,
    CNavLink,
} from '@coreui/react';

const Sidebar = () => {
    const sidebarStyle = {
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        width: '250px',
        backgroundColor: '#d3d3d3',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
    };

    const brandStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5rem',
        margin: '1rem 0',
    };

    const navLinkStyle = {
        margin: '0.5rem 0',
    };

    return (
        <CSidebar style={sidebarStyle}>
            <CSidebarBrand style={brandStyle}>SIAV</CSidebarBrand>
            <CSidebarNav>
                <CNavItem style={navLinkStyle}>
                    <CNavLink href="/registro">Registro</CNavLink>
                </CNavItem>
                <CNavItem style={navLinkStyle}>
                    <CNavLink href="/financas">Finanças</CNavLink>
                </CNavItem>
                <CNavItem style={navLinkStyle}>
                    <CNavLink href="/calendario">Calendário</CNavLink>
                </CNavItem>
                <CNavItem style={navLinkStyle}>
                    <CNavLink href="/veiculos">Veículos</CNavLink>
                </CNavItem>
            </CSidebarNav>
        </CSidebar>
    );
};

export default Sidebar;
