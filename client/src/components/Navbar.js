import React from "react"
import {Link} from "react-router-dom"

function Navbar() {
    return (
        <nav className="navbar">
            <Link className="link" to="/welcomePage">Home</Link>
            <Link className="link" to="/popularHerbs">Popular Herbs</Link>
            <Link className="link" to="/">All Herbs</Link>
        </nav>
    )
}

export default Navbar