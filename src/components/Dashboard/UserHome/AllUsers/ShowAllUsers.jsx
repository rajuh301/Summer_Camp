import React from 'react';

const ShowAllUsers = () => {
    return (
        <div>
            <tbody>
                {/* row 1 */}
                <tr>
                    <th>
                        <label>

                        </label>
                    </th>
                    <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                            <div>
                                <div className="font-bold">{users.name}</div>

                            </div>
                        </div>
                    </td>
                    <td>
                        Zemlak, Daniel and Leannon
                        <br />
                        <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                    </td>
                    <td>Purple</td>
                    <th>
                        <button className="btn btn-ghost btn-xs">details</button>
                    </th>
                </tr>


            </tbody>


        </div>
    );
};

export default ShowAllUsers;