import React from 'react';
import classes from './NavBar.module.css'
import Link from 'next/link'

const NavLinks = (props) => {
    return (
        <ul>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link href="/liveVideo">
                    <a>Live Video</a>
                </Link>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link href="/services">
                    <a>Services</a>
                </Link>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link href="/contact">
                    <a>Contact</a>
                </Link>
            </li>
        </ul>
    );
}

export default NavLinks;