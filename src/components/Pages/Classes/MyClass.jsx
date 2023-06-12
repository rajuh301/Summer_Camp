import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../provicers/AuthProvider';

import { Helmet } from 'react-helmet-async';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';


const MyClass = () => {



    const { user } = useContext(AuthContext)
    const [userData, setUserData] = useState([])
  


    const url = `https://play-u-server-rajuh301.vercel.app/myclass?email=${user?.email}`;


    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setUserData(data))

    }, [url])

    // console.log(userData)




    // Delete method

    const handleDelete = user => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://play-u-server-rajuh301.vercel.app/myclass/${user._id}`, {
                    method: 'DELETE',

                })

                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refatch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }




    return (
        <div>


            <div>
                <div className="w-full">
                    <Helmet>
                        <title>Play-U | My Class</title>
                    </Helmet>
                    <h3 className="text-3xl font-semibold my-4 text-center">Total Classes: {userData.length}</h3>
                    <div className="overflow-x-auto ">
                        <table className="table table-zebra w-full font-bold border">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Class Symble</th>
                                    <th>Name</th>
                                    <th>Institor Name</th>
                                    <th>Email</th>
                                    <th>Price</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    userData.map((user, index) =>
                                        <tr key={user._id}>
                                            <th>{index + 1}</th>
                                            <th><img className='w-12 h-12' src={user.image} alt="" /></th>
                                            <td>{user.cname}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td >{user.price}</td>
                                            <td className='text-green-500'>Painding</td>


                                            <td >
                                                <button className="btn btn-ghost btn-sm bg-red-600  text-white" onClick={() => handleDelete(user)}><FaTrashAlt /></button>

                                            </td>

                                        </tr>)
                                }


                            </tbody>
                        </table>
                    </div>
                </div>

            </div>



        </div>
    );
};

export default MyClass;