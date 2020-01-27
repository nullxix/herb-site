import React from "react"

import Navbar from "./Navbar"
import logo from "../mothersMed_Logo.png"

function Header() {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <Navbar />
        </div>
    )
}

export default Header