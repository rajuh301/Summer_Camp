import React from 'react';

const ShowInstructors = ({ ins }) => {
    return (
        <div>



            <div className="bg-gray-200  flex justify-center items-center gap-x-16 text-white">
                <div className="group w-96 h-96 [perspective:1000px] bg-transparent ">
                    <div className="relative w-full h-full duration-1000  [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ">
                        <div className="absolute [backface-visibility:hidden]">
                            <img className=" w-96 h-96 " src={ins.photo} alt="" />
                        </div>
                        <div className="w-full h-full bg-gray-100 overflow-hidden  group-hover:[transform:rotateY(180deg)] [backface-visibility:hidden]">
                            <div className=" text-center flex flex-col items-center justify-center h-full text-gray-800 pb-5">
                                <h1 className="text-3xl">{ins.name}</h1>
                                <p className="text-lg">Email: {ins.email}</p>
                                <p className="text-lg">Role: {ins.roal}</p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>


    );

};

export default ShowInstructors;



