import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import Sidebar from './Sidebar';
import NavLinks from './NavLinks';
import Backdrop from '../UIElements/Backdrop';
import './header.css';


const MainNavigation = props => {
    const [isSidebarOpen, setSideBarOpen] = useState(false);
    const openSidebar = () => {
        setSideBarOpen(true)
    }
    const closeSidebar = ()=> {
        setSideBarOpen(false)
    }

    return (
        <React.Fragment>
            {isSidebarOpen && <Backdrop onClick={closeSidebar} />}     
            <Sidebar show={isSidebarOpen} onClick={closeSidebar}>
                <nav className="main-navigation__drawer-nav">
                    <NavLinks />
                </nav>
            </Sidebar>
            <MainHeader>
                <button className="main-navigation__menu-btn" onClick={openSidebar}>
                    <span />
                    <span />
                    <span />
                </button>
                <h1 className="main-navigation__title">
                    <Link to='/'> List </Link>
                </h1>
                <nav className="main-navigation__header-nav">
                    <NavLinks />
                </nav>

            </MainHeader>
        </React.Fragment>
    )
}

export default MainNavigation;