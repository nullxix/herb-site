import React from "react"

function HerbDetails(props) {
    const {herbName, location, uses, other} = props
    const locationLabel =() =>{
        return(
            <>
            <hr/>
            <h3>Location</h3>
            <hr/>
            </>
        )
    }
    return (
        <div style={{
            border: '12px solid black',
            padding: '8px',
            margin: '20px'
        }}className="herb-details">
            <h2>Herb Name</h2>
            <hr/>
            <h3>{herbName}</h3>
            {location && locationLabel()}
            <p>{location}</p>
            <hr/>
            <h3>Uses</h3>
            <hr/>
            <p>{uses}</p>
            <p>{other}</p>
        </div>
    )
}

export default HerbDetails