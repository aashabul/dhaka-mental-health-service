import React from 'react';
import { Button, Form } from 'react-bootstrap';
import useAuth from '../../../hooks/UseAuth';

const LogIn = () => {
    const { signInUsingGoogle, handleRegistration, handleEmailChange, handlePasswordChange, error, toggleLogin, isLogin, handleNameChange } = useAuth();
    return (
        <div className="py-5">
            <h2>Please {isLogin ? 'Log In' : 'complete your regirstration with proper information'} </h2>
            <Form className="col-md-4 col-lg-4 col-sm-5 d-flex flex-column m-auto my-5 px-3">
                {!isLogin &&
                    <div>
                        <Form.Label className="d-flex">Name</Form.Label>
                        <Form.Control onBlur={handleNameChange} type="text" placeholder="Enter your name" required />
                    </div>
                }

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="d-flex">Email address</Form.Label>
                    <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="d-flex">Password</Form.Label>
                    <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onChange={toggleLogin} className="d-flex gap-2" type="checkbox" label="Already registered?" />
                </Form.Group>
                <p className="text-danger">{error}</p>
                <div className="d-flex gap-5">
                    <Button onClick={handleRegistration} variant="primary" >
                        {isLogin ? 'LogIn' : 'Register'}
                    </Button>
                    <Button onClick={signInUsingGoogle} variant="primary" >
                        Google Sign In
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default LogIn;