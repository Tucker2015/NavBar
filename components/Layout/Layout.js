import React, { useEffect } from 'react'
import Navbar from '../Navigation/Navbar'
export default function Layout({ children }) {

    const [open, setOpen] = React.useState(false);

    return (
        <body>
            <Navbar />
            {children}
        </body>
    )
}