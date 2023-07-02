// NavigationBar.js

import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './Navbar.css';
import { Link } from 'react-router-dom'
// import Publication from './../Publication';



function NavigationBar() {
  return (
    <div className='stop'>
    <Navbar expand="lg" className="navbar-custom">
      <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor:"greenyellow"}}/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link  className="nav-link"><Link to="/Home" style={{color: "white", textDecoration: 'none'}}>Home</Link></Nav.Link>


          <NavDropdown title= "About Us" className="nav-dropdown"  ><Link to="/About" style={{color: "orangered", textDecoration: 'none'}}></Link>
            <NavDropdown.Item className="dropdown-item"> <Link to="/About" style={{color: "white", textDecoration: 'none'}}>what we do</Link></NavDropdown.Item>
            <NavDropdown.Item className="dropdown-item"> <Link to="/Team" style={{color: "white", textDecoration: 'none'}}>Gto Bod</Link></NavDropdown.Item>
            <NavDropdown.Item className="dropdown-item"> <Link to="/Bod" style={{color: "white", textDecoration: 'none'}}>Gto team</Link></NavDropdown.Item>
            <NavDropdown.Item className="dropdown-item"> <Link to="/About" style={{color: "white", textDecoration: 'none'}}>Gto Polices</Link></NavDropdown.Item>
            <NavDropdown.Item className="dropdown-item"> <Link to="/Success" style={{color: "white", textDecoration: 'none'}}>Our Success</Link></NavDropdown.Item>

          
          </NavDropdown>
          
          <NavDropdown title="Publication" id="basic-nav-dropdown" className="nav-dropdown" style={{color:"orangered"}}><Link to="/Publication" style={{color: "orangered", textDecoration: 'none'}}></Link>
          <NavDropdown.Item className="dropdown-item"> <Link to="/Publication" style={{color: "white", textDecoration: 'none'}}>Research Studies</Link></NavDropdown.Item>
          </NavDropdown>
          <Nav.Link  className="nav-link"><Link to="/Project" style={{color: "white",textDecoration: 'none'}}>PROJECTS</Link></Nav.Link>
          <NavDropdown title="Oppertunities" id="basic-nav-dropdown" className="nav-dropdown"><Link to="/Jobs" style={{color: "orangered",textDecoration: 'none'}}></Link>
          <NavDropdown.Item className="dropdown-item"> <Link to="/Jobs" style={{color: "white", textDecoration: 'none'}}>Jobs Oppertunities</Link></NavDropdown.Item>
          <NavDropdown.Item className="dropdown-item"> <Link to="/Jobs" style={{color: "white", textDecoration: 'none'}}>Grant for Projects</Link></NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Media" id="basic-nav-dropdown" className="nav-dropdown"><Link to="/Gal" style={{color: "orangered",textDecoration: 'none'}}>MEDIA</Link>
          <NavDropdown.Item className="dropdown-item"> <Link to="/Gal" style={{color: "white", textDecoration: 'none'}}>Docomentaries</Link></NavDropdown.Item>
          <NavDropdown.Item className="dropdown-item"> <Link to="/Gal" style={{color: "white", textDecoration: 'none'}}>Picture Gallery</Link></NavDropdown.Item>
          <NavDropdown.Item className="dropdown-item"> <Link to="/News" style={{color: "white", textDecoration: 'none'}}>News Coverage</Link></NavDropdown.Item>
          </NavDropdown>
          <Nav.Link  className="nav-link"><Link to="/Contact" style={{color: "white",textDecoration: 'none'}}>CONTACT Us</Link></Nav.Link>
          <Nav.Link  className="nav-link"><Link to="/News" style={{color: "white",textDecoration: 'none'}}>Donote Us</Link></Nav.Link>

          {/* <Nav.Link href="/publications" className="nav-link"><Link to="/Publication" style={{color: "white",textDecoration: 'none'}}>PUBLICATIONS</Link></Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
}

export default NavigationBar;
