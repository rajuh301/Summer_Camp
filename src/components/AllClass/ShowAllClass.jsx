/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
// import useAdmin from "../../Hooks/useAdmin";
// import useInstructor from "../../Hooks/useInstructor";
import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";
import useInstructor from "../Hooks/useInstructor";
import { AuthContext } from "../../provicers/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
// import { AuthContext } from "../../providers/AuthProvider";



const ShowAllClass = ({ classData }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [availableSeats, setAvailableSeats] = useState(10);

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const { user } = useContext(AuthContext)

    const { _id, name, image, price, cname, category } = classData
    console.log(classData)

    //-------------------------------
    const handleCourseSelection = (classData) => {
        // console.log(classData, user ? user.email : '');


        if (user && user.email) {
            const classItem = { name, image, availableSeats: parseFloat(category), email: user ? user.email : '' }
            fetch('https://play-u-server-rajuh301.vercel.app/usermyclass', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(classItem)
            })
                .then(res => res.json())
                .then(data => {
                    console.log({ data });

                    if (data.insertedId) {
                        // refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'This class added on the cart.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Navigate('/login', { state: { from: location } })
                }
            })
        }

    };
    //-------------------------------
    return (
        <>
            <div
                // key={index}
                style={{
                    backgroundColor: availableSeats === 0 ? 'red' : 'white',
                    padding: '10px',
                    marginBottom: '10px',
                }}
            >
                <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                    <img className="w-full h-72 " src={image} alt="Class" />
                    <div className="card-body">
                        <h2>{cname}</h2>
                        <p>Instructor: {name}</p>
                        <p>Available Seats: {category}</p>
                        <p className="text-yellow-500 pb-4">Price: ${price}</p>

                        {/* Select button */}
                        <div className="card-actions justify-end">
                            <button className="btn btn-outline "
                                disabled={availableSeats === 0 || isAdmin || isInstructor}
                                onClick={() => handleCourseSelection(classData)}
                                style={{ background: availableSeats === 0 ? 'red' : 'transparent' }}
                            >
                                Select
                            </button>
                        </div>
                        {/* Select button */}

                    </div>
                </div>
            </div>

        </>
    );
};

export default ShowAllClass;