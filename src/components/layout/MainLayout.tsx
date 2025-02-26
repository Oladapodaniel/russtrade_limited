import React from 'react';
import HeaderNav from '../independent/HeaderNav';
import { Outlet } from 'react-router-dom';
import Footer from '../reusable/Footer';


const MainLayout: React.FC = () => {
    return (
        <div>
            <HeaderNav />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;