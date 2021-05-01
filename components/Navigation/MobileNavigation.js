import NavLinks from './NavLinks'
import classes from './NavBar.module.css'
import { CgMenuRound, CgCloseO } from 'react-icons/cg'
import { useState } from 'react'

const MobileNavigation = () => {

    const [open, setOpen] = useState(false);

    const openHamburger = <CgMenuRound className={classes.Hamburger}
        size='40px'
        onClick={() => setOpen(!open)}
    />
    const closeHamburger = <CgCloseO className={classes.Hamburger}
        size='40px'
        onClick={() => setOpen(!open)}
    />

    const closeMobileMenu = () => setOpen(false);

    return (
        <nav className={classes.MobileNavigation}>
            {open ? closeHamburger : openHamburger}
            {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
        </nav>
    )
}
export default MobileNavigation