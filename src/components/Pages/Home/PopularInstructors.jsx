import React, { useEffect, useState } from 'react';
import ShowInstructors from './ShowInstructors';

const PopularInstructors = () => {

    const [instructor, setInstructor] = useState([])

    useEffect(() => {
        fetch('https://play-u-server-rajuh301.vercel.app/instructor')
            .then(res => res.json())
            .then(data => setInstructor(data))
    }, [])


    return (
        <div>
            <h2 className='text-4xl flex justify-center mt-10 mb-5'>Popular Instructors</h2>
    

            <div className='grid grid-cols-3 gap-5'>
                {
                    instructor.map(ins => <ShowInstructors
                        ins={ins}
                    ></ShowInstructors>)
                }
            </div>
        </div>
    );
};

export default PopularInstructors;