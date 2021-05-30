import React, {useState} from 'react'
import { Card, Button, Modal } from 'react-bootstrap'

function Dashboard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="dashboard-div">
            <div>
                <p>Topics</p>
            </div>
            <div>
                <Card style={{ width: '45vw' }}>
                    <Card.Body>
                        <Card.Title>Create a post</Card.Title>
                        <Button variant="primary" onClick={handleShow}>Create</Button>
                    </Card.Body>
                </Card>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>New Post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><textarea placeholder="What's up mate?" /></Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="success" onClick={handleClose}>
                            Create
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <div>
                <Card style={{ width: '15vw' }}>
                    <Card.Body>
                        <Card.Title>My Profile</Card.Title>
                        <Button variant="primary">View</Button>
                    </Card.Body>
                </Card>
            </div>

        </div>
    )
}

export default Dashboard
