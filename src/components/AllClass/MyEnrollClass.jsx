import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../provicers/AuthProvider';
import { Helmet } from 'react-helmet-async';
import { FaPray, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyEnrollClass = () => {


    const { user } = useContext(AuthContext)
    const [userData, setUserData] = useState([])


    const url = `https://play-u-server-rajuh301.vercel.app/usermyclass?email=${user?.email}`;


    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setUserData(data))

    }, [url])



    console.log(userData)




    return (


        <div>
            <div className="w-full">
                <Helmet>
                    <title>Play-U | My-Enroll</title>
                </Helmet>
                <h3 className="text-3xl font-semibold my-4  text-center">Total Subject: {userData?.length}</h3>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Symble</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>availableSeats</th>
                                <th>Delete</th>
                                <th>Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userData.map((user, index) =>
                                    <tr key={user._id}>
                                        <th>{index + 1}</th>
                                        <th><img className='w-12 h-12' src={user.image} alt="" /></th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td >{user.availableSeats}</td>


                                        <td >
                                            <button className="btn btn-ghost btn-sm bg-red-600  text-white" onClick={() => makeDelete(user)}><FaTrash /></button>

                                        </td>

                                        <td >
                                            <Link to='/payment' className="btn btn-ghost btn-sm bg-red-600  text-white"><FaPray /></Link>

                                        </td>

                                    </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyEnrollClass;