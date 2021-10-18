import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Service = ({ service }) => {
    const { name, img, description, id } = service;
    const element = <FontAwesomeIcon icon={faArrowRight} />
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
                        <Button className="btn-secondary">Learn More {element}</Button>
                    </Card>
                </Col>
            ))}

        </div>
    );
};

export default Service;