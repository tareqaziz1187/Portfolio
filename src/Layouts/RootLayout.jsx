import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Pages/Shareed/Navbar';


const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
           
        </div>
    );
};

export default RootLayout;