import React from 'react';
import { Button, Form } from 'react-bootstrap';
import useAuth from '../../../hooks/UseAuth';

const LogIn = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className="py-5">
            <h2>Please complete your regirstration with proper information</h2>
            <Form className="col-md-4 col-lg-4 col-sm-5 d-flex flex-column m-auto my-5 px-3">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="d-flex">Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="d-flex">Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check className="d-flex gap-2" type="checkbox" label="Check me out" />
                </Form.Group>
                <Button onClick={signInUsingGoogle} variant="primary" >
                    Google Sign In
                </Button>
            </Form>
        </div>
    );
};

export default LogIn;