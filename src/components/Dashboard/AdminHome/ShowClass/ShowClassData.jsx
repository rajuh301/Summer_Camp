import React from 'react';

const ShowClassData = ({data}) => {
    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
     
                    <tbody>
                        {/* row 1 */}
                        <tr>
                    
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={data.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{data.cname}</div>
                                      
                                    </div>
                                </div>
                            </td>


                            <td>
                                <br />
                                <span className="badge badge-ghost badge-sm">{data.price}</span>
                            </td>
                            <td>Purple</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>

                    </tbody>



                </table>
            </div>

        </div>
    );
};

export default ShowClassData;