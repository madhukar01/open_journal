import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, Button, Modal } from 'react-bootstrap'

function Dashboard() {
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
                            <Button style={{backgroundColor: "#6246ea", color: "white" }}>
                                Create
                            </Button>
                        </Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '45vw', marginTop:'10vh' }}>
                    <Card.Body>
                        <Card.Title>Test Title</Card.Title>
                        <Card.Body className="truncate">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</Card.Body>
                        </Card.Body>
                        <Card.Footer>
                            <Link>
                                <Button style={{backgroundColor: "#6246ea", color: "white" }}>
                                    View full
                                </Button>
                            </Link>
                        </Card.Footer>
                </Card>
            </div>

        </div>
    )
}

export default Dashboard
