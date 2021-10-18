import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('Services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className="my-5">
            <h1 className="my-5">Welcome to DHK Mental Health Service. <br /> How Can We Help You?</h1>
            <Row xs={1} md={2} lg={3} className="g-5 mx-5 my-5">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </Row>



        </div>
    );
};

export default Services;