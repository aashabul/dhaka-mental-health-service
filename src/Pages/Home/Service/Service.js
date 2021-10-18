import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const Service = ({ service }) => {
    const { name, img, description, id } = service;
    return (
        <div>
            {Array.from({ length: 1 }).map((_, idx) => (
                <Col key={id}>
                    <Card>
                        <Card.Img variant="top" src={img} />
                        <Card.Body className="bg-light">
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                {description}
                            </Card.Text>

                        </Card.Body>
                        <Button className="btn-secondary">Learn More...</Button>
                    </Card>
                </Col>
            ))}

        </div>
    );
};

export default Service;