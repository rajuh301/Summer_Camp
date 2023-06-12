import React, { useEffect, useState } from 'react';
import ShowPopularSection from './ShowPopularSection';

const PopularSection = () => {

    const [data, setData] = useState()

    useEffect(() => {
        fetch('https://play-u-server-rajuh301.vercel.app/homeclass')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])



    return (
        <div>
            <h2 className='text-4xl flex justify-center mb-5'>Popular Classes</h2>


            <div className='md:grid grid-cols-3 gap-5 mx-auto border-8'>
                {
                    data?.slice(0, 6).map(cart => <ShowPopularSection
                        key={cart._id}
                        cart={cart}
                    ></ShowPopularSection>)
                }
            </div>

        </div>
    );
};

export default PopularSection;