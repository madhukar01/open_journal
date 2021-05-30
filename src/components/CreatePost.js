import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Radio } from 'react-bootstrap';

function CreatePost() {
    return (
        <div>
            <Form className="createpost-form">
                <Form.Group className="mb-3" controlId="postcategory">
                    <Form.Label><h3>Pick a Category</h3></Form.Label>
                    <Form.Check type="checkbox" label="News" />
                    <Form.Check type="checkbox" label="Articles" />
                    <Form.Check type="checkbox" label="Journals" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="postdesc">
                    <Form.Label>Post Body</Form.Label>
                    <Form.Control as="textarea" type="text" placeholder="Enter Description" />
                </Form.Group>
                <Link to="/dashboard">
                    <Button variant="success" type="submit">
                        Create
                 </Button>
                </Link>
            </Form>
        </div>
    )
}

export default CreatePost
