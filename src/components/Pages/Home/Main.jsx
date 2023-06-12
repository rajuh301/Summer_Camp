import React from 'react';
import Navbar from '../../Shaired/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Shaired/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;