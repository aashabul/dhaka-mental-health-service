import React from 'react';
import { useParams } from 'react-router';

const LearnMore = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h1>Learn more about: {serviceId}</h1>
        </div>
    );
};

export default LearnMore;