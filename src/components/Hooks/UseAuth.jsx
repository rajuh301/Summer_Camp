import React, { useContext } from 'react';
import { AuthContext } from '../../provicers/AuthProvider';
// import { AuthContext } from '../../provicers/AuthProvider';


const UseAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
};

export default UseAuth;