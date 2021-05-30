import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'

function Header(props) {
    if (props.isAuth !== null) {
        return (
            <div>
                <Navbar bg="white" expand="lg">
                    <Navbar.Brand href="/">Open Journal</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="justify-content-end" style={{ width: "100%" }}>
                            <Nav.Link href="/">
                                <Button style={
                                    { backgroundColor: "#6246ea", color: "white" }}>Logout</Button>
                            </Nav.Link>
                            <Nav.Link href="#link">
                                <Button style={
                                    { backgroundColor: "black", color: "white" }}>Github</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
    else {
        return (
            <div>
                <Navbar bg="white" expand="lg">
                    <Navbar.Brand href="/">Open Journal</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="justify-content-end" style={{ width: "100%" }}>
                            <Nav.Link href="/signin">
                                <Button style={
                                    { backgroundColor: "#6246ea", color: "white" }}>LogIn</Button>
                            </Nav.Link>
                            <Nav.Link href="#link">
                                <Button style={
                                    { backgroundColor: "black", color: "white" }}>Github</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header
