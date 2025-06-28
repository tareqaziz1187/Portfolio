import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Pages/Shareed/Navbar';
import Footer from '../Pages/Shareed/Footer';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;