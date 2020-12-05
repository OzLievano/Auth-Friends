import React from 'react'
import {Navbar,Nav,NavLink} from 'reactstrap'

const Navigation = () => {
    const logout = () => {
        localStorage.removeItem('token')
    }
    return (
        <Navbar color='dark'>
            <Nav>
                <NavLink href="/">Home</NavLink>
                <NavLink href="/login">Log-In</NavLink>
                <NavLink href="/login" onClick={logout}>Log-Out</NavLink>
                <NavLink href="/friendslist">Friends List</NavLink>
            </Nav>
        </Navbar>
    )
}

export default Navigation
