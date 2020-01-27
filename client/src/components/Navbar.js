import React from "react"
import {Link} from "react-router-dom"

function Navbar() {
    return (
        <nav className="navbar">
            <Link className="link" to="/welcome-page">Home</Link>
            <Link className="link" to="/popular-herbs">Popular Herbs</Link>
            <Link className="link" to="/">All Herbs</Link>
            <Link className="link" to="/admin">Admin</Link>
        </nav>
    )
}

export default Navbar