import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

const NavbarApp = () => {
    
    return (
        <>
            <Navbar className="myNav" bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src="https://icons.veryicon.com/png/o/business/vscode-program-item-icon/react-3.png" alt="Bootstrap" width="30" height="24" />
                    </Navbar.Brand>
                    <Navbar.Brand href="https://github.com/Ovatsugh/user-register">PersonalApp</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link className="nav-link" to='/'>Inicio</Link>
                        <Link className="nav-link" to='/cadastrar' href="/cadastrar">cadastro</Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarApp