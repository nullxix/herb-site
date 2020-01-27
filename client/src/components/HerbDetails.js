import React from "react"

function HerbDetails(props) {
    const {herbname, location, uses, other} = props
    return (
        <div className="herb-details">
            <h3>{herbname}</h3>
            <p>{location}</p>
            <p>{uses}</p>
            <p>{other}</p>
        </div>
    )
}

export default HerbDetails