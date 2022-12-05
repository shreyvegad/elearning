import React from 'react';
import About from '../About/About';
import Courses from '../Courses/Courses';
import Cover from '../Header/Cover/Cover';
import Pricing from '../Pricing/Pricing';

const Home = () => {
    return (
        <div>
            <Cover>
            </Cover>
            <Courses></Courses>
            <Pricing></Pricing>
            <About></About>
        </div>
    );
};

export default Home;