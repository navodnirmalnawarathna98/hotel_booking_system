"use client";

import { Fragment, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const AddRoom = () => {
    const [scrollShow, setScrollShow] = useState(false);
    const [roomNumber, setRoomNumber] = useState("");
    const [roomType, setRoomType] = useState("");
    const [price, setPrice] = useState("");
    const [acType, setAcType] = useState("");
    const [smallDesc, setSmallDesc] = useState("");
    const [longDesc, setLongDesc] = useState("");
    const [bedCount, setBedCount] = useState("");
    const [guestCount, setGuestCount] = useState("");
    const [mainImage, setMainImage] = useState("");
    const [images, setImages] = useState([]);
    const [amenities, setAmenities] = useState([]);
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
                    images, 
                    amenities
                }),
            });

            if (!response.ok) {
                throw new Error('Error adding room');
            }

            const result = await response.json();
            setSuccess(result.message);

            // Reset fields
            setRoomNumber("");
            setRoomType("");
            setPrice("");
            setAcType("");
            setSmallDesc("");
            setLongDesc("");
            setBedCount("");
            setGuestCount("");
            setMainImage("");
            setImages([]);
            setAmenities([]);
            setScrollShow(false);
        } catch (error) {
            setError('There was an error adding the room. Please try again.');
            console.error('Error adding room:', error);
        }
    };

    const handleAddImage = () => {
        setImages([...images, ""]);
    };

    const handleImageChange = (index, value) => {
        const newImages = [...images];
        newImages[index] = value;
        setImages(newImages);
    };

    const handleAddAmenity = () => {
        setAmenities([...amenities, ""]);
    };

    const handleAmenityChange = (index, value) => {
        const newAmenities = [...amenities];
        newAmenities[index] = value;
        setAmenities(newAmenities);
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
                                rows={3}
                                placeholder="Enter long description"
                                value={longDesc}
                                onChange={(e) => setLongDesc(e.target.value)}
                                className="form-control-style w-100 mt-2"
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
                            <Form.Label className="mt-2">Main Image URL</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter main image URL"
                                value={mainImage}
                                onChange={(e) => setMainImage(e.target.value)}
                                className="form-control-style w-100 mt-2"
                            />
                        </Form.Group>

                        <Form.Group controlId="formImages">
                            <Form.Label className="mt-2">Images URLs</Form.Label>
                            {images.map((image, index) => (
                                <div key={index} className="mb-2">
                                    <Form.Control
                                        type="text"
                                        placeholder={`Enter image URL ${index + 1}`}
                                        value={image}
                                        onChange={(e) => handleImageChange(index, e.target.value)}
                                        className="form-control-style w-100 mt-2"
                                    />
                                </div>
                            ))}
                            <Button variant="outline-primary" onClick={handleAddImage}>
                                Add Image
                            </Button>
                        </Form.Group>

                        <Form.Group controlId="formAmenities">
                            <Form.Label className="mt-2">Amenities</Form.Label>
                            {amenities.map((amenity, index) => (
                                <div key={index} className="mb-2">
                                    <Form.Control
                                        type="text"
                                        placeholder={`Enter amenity ${index + 1}`}
                                        value={amenity}
                                        onChange={(e) => handleAmenityChange(index, e.target.value)}
                                        className="form-control-style w-100 mt-2"
                                    />
                                </div>
                            ))}
                            <Button variant="outline-primary" onClick={handleAddAmenity}>
                                Add Amenity
                            </Button>
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
