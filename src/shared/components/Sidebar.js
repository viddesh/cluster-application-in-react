import React from 'react';
import ReactDom from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import './header.css'

const Sidebar = props => {
    const sideBar = <CSSTransition in={props.show} timeout={200} classNames="slide-in-left" mountOnEnter unmountOnExit>
        <aside className="side-bar" onClick={props.onClick}>{props.children}</aside>
        </CSSTransition>

    return ReactDom.createPortal(sideBar, document.getElementById('sidebar-hook'))
}

export default Sidebar;