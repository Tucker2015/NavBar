import React from 'react';
import classes from './NavBar.module.css'

const NavLinks = (props) => {
    return (
        <ul>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}><a href="/">Home</a></li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}><a href="/about">About</a></li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}><a href="/services">Services</a></li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}><a href="/contact">Contact</a></li>
        </ul>
    );
}

export default NavLinks;