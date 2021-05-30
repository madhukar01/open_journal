import React from 'react'
import {Link} from 'react-router-dom'
import { Button, Form } from 'react-bootstrap';

function SignIn() {
    return (
        <div>
            <Form className="signin-form">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Seed Phase</Form.Label>
                    <Form.Control type="email" placeholder="Enter seed" />
                </Form.Group>
                <Link to="/dashboard">
                    <Button variant="success" type="submit">
                        Authenticate
                 </Button>
                </Link>
                <Button variant="success" type="submit" style={{ marginLeft: "5vw" }}>
                    Generate Random Seed
                </Button>
            </Form>
        </div>
    )
}

export default SignIn
