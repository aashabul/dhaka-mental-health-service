import React from 'react';
import Acheivement from '../Achievement/Acheivement';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Acheivement></Acheivement>
        </div>
    );
};

export default Home;
