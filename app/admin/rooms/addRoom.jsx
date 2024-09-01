"use client";

import { Fragment, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const AddRoom = () => {
    const [scrollShow, setScrollShow] = useState(false);
    const [roomNumber, setRoomNumber] = useState("");
    const [roomType, setRoomType] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSaveChanges = async () => {
        setError("");
        setSuccess("");

        try {
            const response = await fetch('/api/rooms', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ roomNumber, roomType }),
            });

            if (!response.ok) {
                throw new Error('Error adding room');
            }

            const result = await response.json();
            setSuccess(result.message);
            setRoomNumber("");
            setRoomType("");
            setScrollShow(false);
        } catch (error) {
            setError('There was an error adding the room. Please try again.');
            console.error('Error adding room:', error);
        }
    };

    return (
        <Fragment>
            <Button className="mb-5" variant="primary" onClick={() => setScrollShow(true)}>
                Add Room
            </Button>
            <Modal className="modal-dialog-scrollable" show={scrollShow} onHide={() => setScrollShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Room</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ height: 'auto' }}>
                    <Form>
                        <Form.Group controlId="formRoomNumber">
                            <Form.Label className="mt-2">Room Number</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter room number"
                                value={roomNumber}
                                onChange={(e) => setRoomNumber(e.target.value)}
                                className="form-control-style w-100 mt-2"
                            />
                        </Form.Group>
                        <Form.Group controlId="formRoomType">
                            <Form.Label className="mt-2">Room Type</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter room type"
                                value={roomType}
                                onChange={(e) => setRoomType(e.target.value)}
                                className="form-control-style w-100 mt-2"
                            />
                        </Form.Group>
                        {error && <p className="text-danger mt-2">{error}</p>}
                        {success && <p className="text-success mt-2">{success}</p>}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setScrollShow(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSaveChanges}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    );
};

export default AddRoom;
