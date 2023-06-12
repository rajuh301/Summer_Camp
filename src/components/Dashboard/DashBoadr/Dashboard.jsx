import React from 'react';
import useAdmin from '../../Hooks/useAdmin';
import { FaHome, FaUsers, FaWallet } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useInstructor from '../../Hooks/useInstructor';
import MyClass from '../../Pages/Classes/MyClass';

const Dashboard = () => {
    const [isAdmin] = useAdmin()
    const [isInstitor] = useInstructor()

    return (
        <div className='flex'>
            <div className='h-[600px] w-52 bg-slate-600 font-bold text-white px-5 text-center '>

                <div>
                    <h3 className='text-2xl py-2'>DashBoard</h3>


                </div>


                <div className=''>
                    {
                        isAdmin ? <p>
                            Admin Online <span className='text-5xl text-green-600'>.</span>
                        </p> : isInstitor ?
                            <p>Institor Online <span className='text-5xl text-green-600'>.</span></p> :
                            <p>User Online <span className='text-5xl text-green-600'>.</span></p>
                    }

                </div>

                <hr />


                <div className='my-32'>



                    {
                        isAdmin ? <div className='grid grid-rows-1 gap-5 '>



                            <p className='scale-125 hover:scale-150 ease-in duration-500 hover:text-pink-500  mx-auto'><Link to='/dashboard/requestclass'>Manage Class </Link></p>

                            <p className='scale-125 hover:scale-150 ease-in duration-500 hover:text-pink-500  mx-auto'><Link to='/dashboard/alluser'>Manage Users</Link></p>


                        </div> : isInstitor ? <div className='grid grid-rows-1 gap-5 '>



                            <p className='scale-125 hover:scale-150 ease-in duration-500 hover:text-pink-500  mx-auto'><Link to='/dashboard/createclass'> Add a class</Link></p>

                            <p className='scale-125 hover:scale-150 ease-in duration-500 hover:text-pink-500  mx-auto'><Link to='/dashboard/myclass'> My Class</Link></p>

                        </div>


                            : <div className='grid grid-rows-1 gap-5 '>



                                <p className='scale-125 hover:scale-150 ease-in duration-500 hover:text-pink-500  mx-auto'><Link to='/paymenthistery'>Payment History</Link></p>
                                <p className='scale-125 hover:scale-150 ease-in duration-500 hover:text-pink-500  mx-auto'><Link to='/myenrollclass'>My enroll class</Link></p>


                            </div>

                    }
                </div>


            </div >

                

        </div>
    );
};

export default Dashboard;