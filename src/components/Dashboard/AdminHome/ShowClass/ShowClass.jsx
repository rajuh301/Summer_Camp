import React, { useEffect, useState } from 'react';
import ShowClassData from './ShowClassData';
import Swal from 'sweetalert2';

const ShowClass = () => {


    const [showClass, setShowClass] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://play-u-server-rajuh301.vercel.app/class')
            .then(res => res.json())
            .then(data => {
                setShowClass(data);
                setLoading(false)
            })
    }, [])


    const handlePost = (data) => {
        console.log(data)

        fetch('https://play-u-server-rajuh301.vercel.app/homeclass', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Class Posted successfully.',
                    showConfirmButton: false,
                    timer: 1500
                });

            })
    }

    // ----------------- Delete 
    // ----------------------------------------- TODO
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
                fetch(`https://play-u-server-rajuh301.vercel.app/class/${user._id}`, {
                    method: 'DELETE',

                })

                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            // refatch();
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

        <div className="w-full">
            {/* <Helmet>
                <title>Bistro Boss | All users</title>
            </Helmet> */}
            <h3 className="text-3xl font-semibold my-4">Total Painding Class: {showClass.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class name</th>
                            <th>Institure Name</th>
                            <th>Price</th>
                            <th>Total Post</th>
                            <th>Delect</th>
                            <th>Post</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            showClass.map((data, index) => <tr key={data._id}>
                                <th>{index + 1}</th>
                                <td>{data.cname}</td>
                                <td>{data.name}</td>
                                <td>{data.price}</td>
                                <td>{data.category}</td>

                                <td><button onClick={() => handleDelete(data)} className="btn btn-ghost bg-red-600  text-white">Reject</button></td>
                                <td><button onClick={() => handlePost(data)} className="btn btn-ghost bg-red-600  text-white">Post</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );



};

export default ShowClass;