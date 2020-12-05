import React from 'react'
import {Navbar,Nav,NavLink} from 'reactstrap'

const Navigation = () => {
    return (
        <Navbar color='dark'>
            <Nav>
                <NavLink href="/">Home</NavLink>
                <NavLink href="/">Log-In</NavLink>
                <NavLink href="/">Friends List</NavLink>
            </Nav>
        </Navbar>
    )
}

export default Navigation
