import React from 'react';
import useClass from '../Hooks/useClass';
import ShowAllClass from './ShowAllClass';

const AllClass = () => {
    const [menu] = useClass()
    console.log(menu)
    return (
        <div>
            <h3 className='text-2xl font-bold text-center mt-5'>All Class</h3>

            <div className="grid sm:grid-cols-1 md:grid-cols-3 my-8  gap-4">

                {menu.map((classData, index) =>
                (<ShowAllClass key={index} index={index} classData={classData} />

                ))}
            </div>

        </div>
    );
};

export default AllClass;