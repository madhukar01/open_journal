import React from 'react'
import { Navbar, Nav, Button, Fade } from 'react-bootstrap'

class Header extends React.Component {
    constructor() {
        super();
        this.loggedIn = localStorage.getItem("loggedIn");
        localStorage.getItem("loggedIn");
    }

    componentDidMount() {
        this.loggedIn = localStorage.getItem("loggedIn");
        this.forceUpdate()
    }

    render() {
        console.log(this.loggedIn)
        if (this.loggedIn == "TRUE") {
            return (
                <div>
                    <Navbar bg="white" expand="lg">
                        <Navbar.Brand href="/">Open Journal</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="justify-content-end" style={{ width: "100%" }}>
                                <Nav.Link href="/dashboard">
                                    <Button style={
                                        { backgroundColor: "#6246ea", color: "white" }}>Dashboard</Button>
                                </Nav.Link>
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
}

export default Header
