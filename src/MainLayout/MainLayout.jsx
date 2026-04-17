import React from 'react';
import Navber from '../components/Shared/Navber';
import Footer from '../components/Shared/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <Navber></Navber>
              <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;