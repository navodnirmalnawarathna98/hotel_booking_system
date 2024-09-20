"use client";

import React, { useState } from 'react';
import { Container, Nav, Tab, Button, Form, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaGoogle, FaGithub } from 'react-icons/fa';

function page() {
  const [activeTab, setActiveTab] = useState('login');

  const handleSelect = (eventKey) => {
    setActiveTab(eventKey);
  };

  return (
    <Container className="p-3 my-5 d-flex flex-column w-50">
      <Tab.Container activeKey={activeTab} onSelect={handleSelect}>
        <Nav variant="pills" className="mb-3 justify-content-between">
          <Nav.Item>
            <Nav.Link eventKey="login">Login</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="register">Register</Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content>
          <Tab.Pane eventKey="login">
            <div className="text-center mb-3">
              <p>Sign in with:</p>
              <div className="d-flex justify-content-between mx-auto" style={{ width: '40%' }}>
                <Button variant="link" className="m-1 text-primary">
                  <FaFacebookF />
                </Button>
                <Button variant="link" className="m-1 text-primary">
                  <FaTwitter />
                </Button>
                <Button variant="link" className="m-1 text-primary">
                  <FaGoogle />
                </Button>
                <Button variant="link" className="m-1 text-primary">
                  <FaGithub />
                </Button>
              </div>

              <p className="text-center mt-3">or:</p>
            </div>

            <Form>
              <Form.Group controlId="formLoginEmail" className="mb-4">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formLoginPassword" className="mb-4">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Row className="mb-4">
                <Col xs={6}>
                  <Form.Check type="checkbox" label="Remember me" />
                </Col>
                <Col xs={6} className="text-end">
                  <a href="#!">Forgot password?</a>
                </Col>
              </Row>

              <Button variant="primary" className="w-100 mb-4">
                Sign in
              </Button>
              <p className="text-center">
                Not a member? <a href="#!">Register</a>
              </p>
            </Form>
          </Tab.Pane>

          <Tab.Pane eventKey="register">
            <div className="text-center mb-3">
              <p>Sign up with:</p>
              <div className="d-flex justify-content-between mx-auto" style={{ width: '40%' }}>
                <Button variant="link" className="m-1 text-primary">
                  <FaFacebookF />
                </Button>
                <Button variant="link" className="m-1 text-primary">
                  <FaTwitter />
                </Button>
                <Button variant="link" className="m-1 text-primary">
                  <FaGoogle />
                </Button>
                <Button variant="link" className="m-1 text-primary">
                  <FaGithub />
                </Button>
              </div>

              <p className="text-center mt-3">or:</p>
            </div>

            <Form>
              <Form.Group controlId="formName" className="mb-4">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
              </Form.Group>

              <Form.Group controlId="formUsername" className="mb-4">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-4">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formPassword" className="mb-4">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group controlId="formTerms" className="d-flex justify-content-center mb-4">
                <Form.Check type="checkbox" label="I have read and agree to the terms" />
              </Form.Group>

              <Button variant="primary" className="w-100 mb-4">
                Sign up
              </Button>
            </Form>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Container>
  );
}

export default page;

