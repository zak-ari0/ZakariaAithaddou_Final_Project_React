import React from 'react';
import Carousel1 from '../components/carousel1';
import Categories from '../components/Categories';
import Carousel2 from '../components/Carousel2';
import ScaleSection from '../components/scaleSection';
import OurBlog from '../components/OurBlog';

function Home() {
    return (
        <div>
            <Carousel1 />
            <Categories />
            <Carousel2 />
            <ScaleSection />
            <OurBlog />
        </div>
    );
}

export default Home;