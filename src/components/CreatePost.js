import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Radio } from 'react-bootstrap';

function CreatePost() {
    return (
        <div>
            <Form className="createpost-form">
                <Form.Group className="mb-3" controlId="posttitle">
                    <Form.Label>Post Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Title" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="postdesc">
                    <Form.Label>Post Body</Form.Label>
                    <Form.Control as="textarea" type="text" placeholder="Enter Description" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="postcategory">
                    <Form.Label>Pick a Category</Form.Label>
                    <Form.Check type="checkbox" label="News" />
                    <Form.Check type="checkbox" label="Article" />
                    <Form.Check type="checkbox" label="Journal" />
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
