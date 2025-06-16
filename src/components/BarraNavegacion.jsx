import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const navItems = [
  { key: 'principal', label: 'Principal'},
  { key: 'peliculas', label: 'Películas'},
];

const BarraNavegacion = ({ currentPage, setCurrentPage }) => (
  <Navbar
    color="dark"
    dark
    expand="md"
    className="mb-4 shadow"
    style={{ position: 'sticky', top: 0, zIndex: 20 }}
  >
    <NavbarBrand href="/" className="d-flex align-items-center gap-2">
    </NavbarBrand>
    <Nav className="ms-auto" navbar>
      {navItems.map((item) => (
        <NavItem key={item.key}>
          <NavLink
            href="#"
            onClick={() => setCurrentPage(item.key)}
            active={currentPage === item.key}
            style={{
              color: currentPage === item.key ? '#ffc107' : '#fff',
              fontWeight: currentPage === item.key ? 'bold' : 'normal',
              fontSize: 18,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              transition: 'color 0.2s',
            }}
          >
            <span style={{ fontSize: 22 }}>{item.icon}</span>
            {item.label}
          </NavLink>
        </NavItem>
      ))}
    </Nav>
  </Navbar>
);

export default BarraNavegacion;