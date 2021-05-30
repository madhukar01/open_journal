import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'

import Authenticate from './Authentication';
import Loader from "react-loader-spinner";

class Dashboard extends React.Component {
    constructor() {
        super();
        this.loggedIn = localStorage.getItem("loggedIn");
    }

    componentDidMount() {
        this.loggedIn = localStorage.getItem("loggedIn");
        if (this.loggedIn != "TRUE") {
            // Authenticate
            Authenticate().then(authData => {
                this.authData = authData
                this.loggedIn = authData.loggedIn

                // Re - render page after authentication
                console.log("Dashboard: Authenticated, Force - Updating")
                this.forceUpdate()
            });
        }
    }

    render() {
        if (this.loggedIn == "TRUE") {
            return (
                <div className="dashboard-div">
                    <div>
                        <p>Topics</p>
                    </div>
                    <div>
                        <Card style={{ width: '45vw' }}>
                            <Card.Body>
                                <Card.Title>Create a post</Card.Title>
                                <Link to="/createpost">
                                    <Button style={{ backgroundColor: "#6246ea", color: "white" }}>
                                        Create
                                    </Button>
                                </Link>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '45vw', marginTop: '10vh' }}>
                            <Card.Body>
                                <Card.Title>Test Title</Card.Title>
                                <Card.Body className="truncate">
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</Card.Body>
                            </Card.Body>
                            <Card.Footer>
                                <Link to="/viewpost">
                                    <Button style={{ backgroundColor: "#6246ea", color: "white" }}>
                                        View full
                                    </Button>
                                </Link>
                            </Card.Footer>
                        </Card>
                    </div>

                </div>
            )
        }
        else {
            return (<div className="centered">
                <Loader
                    type="Grid"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={0}
                /></div>)
        }
    }
}

export default Dashboard
