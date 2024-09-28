"use client";

import { Fragment, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const EditRoom = ({ room, onClose, onSave }) => {
    const [roomNumber, setRoomNumber] = useState(room.roomNumber);
    const [roomType, setRoomType] = useState(room.roomType);
    const [price, setPrice] = useState(room.price);
    const [acType, setAcType] = useState(room.acType);
    const [smallDesc, setSmallDesc] = useState(room.smallDesc);
    const [longDesc, setLongDesc] = useState(room.longDesc);
    const [bedCount, setBedCount] = useState(room.bedCount);
    const [guestCount, setGuestCount] = useState(room.guestCount);
    const [mainImage, setMainImage] = useState(room.mainImage);
    const [images, setImages] = useState(room.images.join(', '));
    const [amenities, setAmenities] = useState(room.amenities.join(', '));
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSaveChanges = async () => {
        setError("");
        setSuccess("");

        try {
            const response = await fetch(`/api/rooms?id=${room._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    roomNumber, 
                    roomType, 
                    price, 
                    acType, 
                    smallDesc, 
                    longDesc, 
                    bedCount, 
                    guestCount, 
                    mainImage, 
                    images: images.split(',').map(img => img.trim()), 
                    amenities: amenities.split(',').map(amenity => amenity.trim()) 
                }),
            });

            if (!response.ok) {
                throw new Error('Error updating room');
            }

            const result = await response.json();
            setSuccess(result.message);
            onSave();
        } catch (error) {
            setError('There was an error updating the room. Please try again.');
            console.error('Error updating room:', error);
        }
    };

    return (
        <Fragment>
            <Modal show={true} onHide={onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Room</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                        <Form.Group controlId="formPrice">
                            <Form.Label className="mt-2">Price</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                className="form-control-style w-100 mt-2"
                            />
                        </Form.Group>
                        <Form.Group controlId="formAcType">
                            <Form.Label className="mt-2">AC Type</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter AC type"
                                value={acType}
                                onChange={(e) => setAcType(e.target.value)}
                                className="form-control-style w-100 mt-2"
                            />
                        </Form.Group>
                        <Form.Group controlId="formSmallDesc">
                            <Form.Label className="mt-2">Short Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter short description"
                                value={smallDesc}
                                onChange={(e) => setSmallDesc(e.target.value)}
                                className="form-control-style w-100 mt-2"
                            />
                        </Form.Group>
                        <Form.Group controlId="formLongDesc">
                            <Form.Label className="mt-2">Long Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                placeholder="Enter long description"
                                value={longDesc}
                                onChange={(e) => setLongDesc(e.target.value)}
                                className="form-control-style w-100 mt-2"
                                rows={3}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBedCount">
                            <Form.Label className="mt-2">Bed Count</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter bed count"
                                value={bedCount}
                                onChange={(e) => setBedCount(e.target.value)}
                                className="form-control-style w-100 mt-2"
                            />
                        </Form.Group>
                        <Form.Group controlId="formGuestCount">
                            <Form.Label className="mt-2">Guest Count</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter guest count"
                                value={guestCount}
                                onChange={(e) => setGuestCount(e.target.value)}
                                className="form-control-style w-100 mt-2"
                            />
                        </Form.Group>
                        <Form.Group controlId="formMainImage">
                            <Form.Label className="mt-2">Main Image</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter main image URL"
                                value={mainImage}
                                onChange={(e) => setMainImage(e.target.value)}
                                className="form-control-style w-100 mt-2"
                            />
                        </Form.Group>
                        <Form.Group controlId="formImages">
                            <Form.Label className="mt-2">Additional Images</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter image URLs separated by commas"
                                value={images}
                                onChange={(e) => setImages(e.target.value)}
                                className="form-control-style w-100 mt-2"
                            />
                        </Form.Group>
                        <Form.Group controlId="formAmenities">
                            <Form.Label className="mt-2">Amenities</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter amenities separated by commas"
                                value={amenities}
                                onChange={(e) => setAmenities(e.target.value)}
                                className="form-control-style w-100 mt-2"
                            />
                        </Form.Group>
                        {error && <p className="text-danger mt-2">{error}</p>}
                        {success && <p className="text-success mt-2">{success}</p>}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onClose}>
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

export default EditRoom;
