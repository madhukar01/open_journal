import React from 'react'
import {Link} from 'react-router-dom'
import { Button, Form } from 'react-bootstrap';

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
