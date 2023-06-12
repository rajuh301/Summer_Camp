import React, { } from 'react';
import Marquee from "react-fast-marquee";

import img1 from '../../../assets/01.jpg'
import img2 from '../../../assets/02.jpg'
import img3 from '../../../assets/03.jpg'
import img4 from '../../../assets/04.jpg'
import ExtraSectionCard from './ExtraSectionCard';
import ImageGellery from './ImageGellery';


const ExtraSection = () => {



    return (
        <div>
           
            <ExtraSectionCard></ExtraSectionCard>


            <Marquee>
                <div className='flex gap-10'>

                    <div className='w-72'>
                        <img className='rounded-lg border' src={img1} alt="" />
                    </div>

                    <div className='w-72'>
                        <img className='rounded-lg border' src={img2} alt="" />
                    </div>

                    <div className='w-72'>
                        <img className='rounded-lg border' src={img3} alt="" />
                    </div>

                    <div className='w-72'>
                        <img className='rounded-lg border' src={img4} alt="" />
                    </div>


                </div>
            </Marquee>

            <div className='mt-10 mx-auto text-2xl'>
                <ImageGellery></ImageGellery>
            </div>


        </div>
    );
};

export default ExtraSection;