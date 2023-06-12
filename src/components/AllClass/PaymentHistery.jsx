import React, { useContext, useState } from 'react';
import { AuthContext } from '../../provicers/AuthProvider';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const PaymentHistery = () => {


    const { user } = useContext(AuthContext)
    const [userData, setUserData] = useState([])


    const url = `https://play-u-server-rajuh301.vercel.app/paymenthestery?email=${user?.email}`;


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
                    <title>Play-U | Paymet Histery</title>
                </Helmet>
                <h3 className="text-3xl font-semibold my-4  text-center">Total Paymented: {userData?.length}</h3>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Email</th>
                                <th>Price</th>
                                <th>Payment Date</th>
                                <th>TransactionId</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userData.map((user, index) =>
                                    <tr key={user._id}>
                                        <th>{index + 1}</th>  
                                        <td>{user.email}</td>
                                        <td >{user.price}</td>
                                        <td >{user.date}</td>
                                        <td >{user.transactionId}</td>
                                        <td >{user.status}</td>

            
                                    </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default PaymentHistery;