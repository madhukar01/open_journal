import React, { useState } from 'react'
import {Link} from 'react-router-dom'
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
                        <Link to = "/createpost">
                            <Button variant="primary">Create</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </div>

        </div>
    )
}

export default Dashboard
