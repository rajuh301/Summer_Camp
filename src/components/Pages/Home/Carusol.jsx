import React from 'react';

import img1 from '../../../assets/01.jpg'
import img2 from '../../../assets/02.jpg'
import img3 from '../../../assets/03.jpg'
import img4 from '../../../assets/04.jpg'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Carusol = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img2} />
                </div>
                <div>
                    <img src={img3} />
                </div>
                <div>
                    <img src={img4} />
                </div>
            </Carousel>
        </div>
    );
};

export default Carusol;