import React, {useState, useEffect} from "react"
import axios from "axios"
import HerbDetails from "./HerbDetails"

function Herbs() {
    const [herbsData, setHerbsData] = useState([])

    useEffect(() => getHerbsData(), [])

    function getHerbsData() {
        axios.get("/mothersMed")
            .then(res => setHerbsData(res.data))
            .catch(err => console.log(err))
    }

    return (
        <div>
            {herbsData.map(herb => <HerbDetails key={herb._id} {...herb} />)}
        </div>
    )
}

export default Herbs