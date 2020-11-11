import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Header = () =>{
    return(
        <Navbar  bg="dark" expand="lg" style={{justifyContent: "space-between"}} >
            <Link  to = "/"><Navbar.Brand href="#home" style ={{ color: "white"}}>BidOnHomes</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Link to="/signin"><Nav.Link href="#home" style ={{ color: "white"}}>SignIn</Nav.Link></Link>
                <Link to = "/addproduct"><Nav.Link href="#link" style ={{ color: "white"}}>Add Product</Nav.Link></Link>
                
                </Nav>
                { }
                
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;