import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import UseAuth from '../Hooks/UseAuth';
import useInstructor from '../Hooks/useInstructor';


const InstructorRoute = ({ children }) => {
    const { user, loading } = UseAuth();
    const [isInstructor, isInstructorLoading] = useInstructor();

    const location = useLocation();

    if (loading || isInstructorLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && isInstructor) {
        return children;
    }


    return <Navigate to='/login' state={{ from: location }} replace></Navigate>


};

export default InstructorRoute;